import { Component } from '@angular/core';  //degrasyonu kullanabilmek için bu şekilde imlement etmek gerekiyor

//Buradaki kısım degrasyon kısmı c# daki Attibute yapısnın aynısı.İlgili yerin çalışma anında anlam yüklemesine sağlıyor.java da da natosyon şekilde yapılıyor
@Component({  //{} bu şekildeki süslü parantezler js de obje demek
  selector: 'app-root', // index.html daki <app-root></app-root> nın kullanılmasını buradaki selector sağlıyor yani html deki li , table gibi ifadeleri kullanabilmemizi sağlatıyor
  templateUrl: './app.component.html', //  demek aynı klasorde bulunduğunu ifade ediyor.
  styleUrls: ['./app.component.css'] //bu html in yain yukarıda tanımlı olan html in css lerini koyduğumuz yer.[] köşeli oarantez js dünyasında array yani dizi demek
  //Bu compoenentle ilgili css lerin koyulduğu yerdir.
})
export class AppComponent {
  title: string = 'northwind'; //tek yada çift tırnak farketmez, noktalı virgül koyma zorunluluğuda yok.
  //string title ="Birşey";
  user: string = "Uğur Okan Çivgin"; //html kısmında {{user}} şeklinde yaparak angular ile çalışma yapabiliyoruz.Çağırabiliyoruz

}
