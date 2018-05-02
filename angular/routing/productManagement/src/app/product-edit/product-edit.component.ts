import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  id: number;

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.dataService.updateProduct(this.id, this.product);
    this.router.navigate(['/products']);
  }

  deleteProduct(id: number): void {
    this.dataService.deleteProduct(id);
    this.router.navigate(['/products']);
  }

}
