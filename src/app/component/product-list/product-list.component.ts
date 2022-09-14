import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
//inject product service into component
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }
   listProducts(){
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
   }
}

//integrates service with angular component

//todo make a card component