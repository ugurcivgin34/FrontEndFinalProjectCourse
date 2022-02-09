import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './conponents/product/product.component';
import { CategoryComponent } from './conponents/category/category.component';
import { NaviComponent } from './conponents/navi/navi.component';


//Bizim oluşturduğumuz componentleri kulanmamızı sağlayan tanımlama burası
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//module temel manada birbiri ile ilişkili componentleri,directiveleri ve farklı bileşenleri topladığımız yerdir.
