import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //swap this for aws link
  private baseUrl='http://localhost:8080/api/products'
  constructor(private httpClient: HttpClient) { }

  //map json spring data from rest to a product array
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
      );


  }
}

interface GetResponse {
  _embedded:{
    products: Product[];
  }
}