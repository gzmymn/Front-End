import { HttpClient } from '@angular/common/http'; //backend'deki dataya ulaşmak için-API call
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel.';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ="https://localhost:44351/api/"; //bu standart adresim

  constructor(private httpClient:HttpClient) { } //AppModule'de import etmemiz gerekiyor

  getProducts():Observable<ListResponseModel<Product>> { //Observabel:
    let newPath =  this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> { 
    let newPath =  this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add", product) //postman'deki body gibi düşün 
  }
}
