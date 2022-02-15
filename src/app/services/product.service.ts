import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/ListResponseModel';

import { Product } from '../models/product';


//Enjekte edilecek servis demek.
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44386/api/";
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<listResponseModel<Product>> {
    let newPath=this.apiUrl + "products/getall"
    return this.httpClient.get<listResponseModel<Product>>(newPath);
    // .subscribe((response )=> {
      // this.productResponseModel = response
    //   this.products=response.data;
    //  }); //Gelen datayı ProductResponseModel Map edeceksin demek
    // js  herşey fonksiyon.
  }

  getProductsByCategory(categoryId:number):Observable<listResponseModel<Product>> {
    let newPath=this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }

}
