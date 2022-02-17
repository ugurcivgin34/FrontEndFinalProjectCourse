import { ProductComponent } from './conponents/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //router-outlet e denk geliyor.Html kısmında bu prodcut şeklinde güncellensin olarak ayarladık
  {path:"",pathMatch:"full",component:ProductComponent}, //pathWatch hiç bir şey yoksa onu full olarak algıla ondan sonra ne gelirse ayrı olarak hesapla
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
