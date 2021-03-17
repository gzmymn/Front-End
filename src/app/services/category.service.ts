import { HttpClient } from '@angular/common/http'; //backend'deki dataya ulaşmak için-API call
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl ="https://localhost:44351/api/categories/getall";

  constructor(private httpClient:HttpClient) { } //AppModule'de import etmemiz gerekiyor

  getCategories():Observable<ListResponseModel<Category>> { //Observabel:
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
