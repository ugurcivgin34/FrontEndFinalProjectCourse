import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http'; //backend de istek bulunabiliyoruz artık.Http clieant ile backend e istek de bulunabiliyoruz
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//axios,fetch react ile yapılabiliyor

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // product1 = { productId: 1, productName: "Bardak", categoryId: 1, unitPrice: 5 } //product.any demek veri tipi her şey olabilir demek, yazılmasa da olur.
  // //Burada obje isimleri camelCasedir. C# da olsaydı Büyük harfle başlardı yani özellik olduğu için büyük harfle isimlendirme yapılırdı
  // product2 = { productId: 2, productName: "Laptop", categoryId: 1, unitPrice: 5 }
  // product3 = { productId: 3, productName: "Mouse", categoryId: 1, unitPrice: 5 }
  // product4 = { productId: 4, productName: "Keyboard", categoryId: 1, unitPrice: 5 }
  // product5 = { productId: 5, productName: "Camera", categoryId: 1, unitPrice: 5 }

  products: Product[] = [];
  dataLoaded = false;
  filterText="";

  // productResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true
  // };


  //httpclianti component te kullabilmek için  nesnes oluşturması gerekiyor.Bunu da enjekte ederek yapabiliriz.Bu yüzden yaptık
  //c# da autofac yada kendi depency injection u mekanizması vardı,.Angularda da injeksiyon hazır olarak geliyor.
  //Pricate olarak yapmamızın sebebi normalde c# da this. şekilde http clieant a erişemyiz.Burda this. şeklinde erişebiliriz
  //private yazmamızın sebebi ise private olmasaydı başka class da ProductComponent. dediğimizde httpCliant gözükürdü
  //constructor(private httpClient: HttpClient) { } bir component httpClient kullanmaz.Onu productservice de tanımladık
  constructor(private productService: ProductService,
     private activatedRoute: ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService) { } //Angular bizim yerimize enjekte ediyor
  //

  //ProductComponent DOM a yerleştiğinde yani açlıldığında  çalışan metod OnInıt tir.
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      } else {
        this.getProducts()
      }
    })

  }
  //public void NgOnInit() {} c# da yazılımı.

  getProducts() {
    // this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response )=> {
    //   // this.productResponseModel = response
    //   this.products=response.data;
    //  }); //Gelen datayı ProductResponseModel Map edeceksin demek
    // // js  herşey fonksiyon.

    //Backend de api lerle çalışıyorsak onlar asenkrondur
    //Eğer yazdığımız servisle ilgili component bazlı kurallar varsa  subscribe i biz componente geçiririz.Ama yoksa subscribe i direk
    //service de yazıp Observable uğraşmadan(subscribe Observable dan gelme zaten) buraya da geçiş yapabiliriz
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {

    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(product:Product){
    this.toastrService.success("Sepete Eklendi",product.productName)
    this.cartService.addToCart(product);
  }

}
