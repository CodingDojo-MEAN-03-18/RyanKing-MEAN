import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: Product = new Product();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // console.log(this.product);
    this.dataService.newProduct(this.product);
    this.router.navigate(['/products']);
  }

}
