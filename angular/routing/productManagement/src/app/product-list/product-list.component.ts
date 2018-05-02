import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  all_products: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.all_products = this.dataService.getProducts();
  }

  deleteProduct(id: number): void {
    this.dataService.deleteProduct(id);
  }

}
