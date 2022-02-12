//Apiden gelen datayı karşılayacak modeli yapmamız gerekiyor, buna clieant model diyoruz.Backend de entity,dto vardı ya bunun karışılığı
//burda clieant model dir


//interface ile sınırlandırmış yaptık.public karşılığı bu arada exporttur.
//Referans tutucudur genellikle ama java,c# dilleri gibi çok güçlü değil
//Burada daha çok sınırlandırma işlemleri için , obje tipleri için kullanılır
export interface Product {
  productId:number;
  categoryId:number;
  productName:string;
  unitsInStock:number;
  unitPrice:number;
}
