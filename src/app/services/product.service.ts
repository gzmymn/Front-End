import { HttpClient } from '@angular/common/http'; //backend'deki dataya ulaşmak için-API call
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ="https://localhost:44351/api/products/getall";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel> { //Observabel:
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
