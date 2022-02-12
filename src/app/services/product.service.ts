import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

//Enjekte edilecek servis demek.
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44386/api/Products/getall";
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
    // .subscribe((response )=> {
      // this.productResponseModel = response
    //   this.products=response.data;
    //  }); //Gelen datayı ProductResponseModel Map edeceksin demek
    // js  herşey fonksiyon.
  }
}
