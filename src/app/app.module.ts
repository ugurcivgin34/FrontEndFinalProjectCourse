import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //bir apiye istekde bulunmak için app modulunde
//bunun olması gerekiyor.Enjekslyinların insteasının karşılığını bulamadı.Backendeki ile.Bu yüzden bu modülü ekledik.
//injection u yapan bu
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './conponents/product/product.component';
import { CategoryComponent } from './conponents/category/category.component';
import { NaviComponent } from './conponents/navi/navi.component';
import { VarAddedPipe } from './pipes/var-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './conponents/cart-summary/cart-summary.component';


//Bizim oluşturduğumuz componentleri kulanmamızı sağlayan tanımlama burası
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VarAddedPipe,
    FilterPipePipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right" //alt sağda göster
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//module temel manada birbiri ile ilişkili componentleri,directiveleri ve farklı bileşenleri topladığımız yerdir.
