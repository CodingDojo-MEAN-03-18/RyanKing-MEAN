import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class DataService {
  all_products: Product[];

  constructor() { }

  getProducts(): Product[] {
    return this.all_products;
  }

  newProduct(product: Product): Product {
    this.all_products.push(product);
    return product;
  }

}
