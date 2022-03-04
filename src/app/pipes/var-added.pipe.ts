import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'varAdded'
})
export class VarAddedPipe implements PipeTransform {

  //ilk değer bizim pipe mizin değiştirmek istediği değerdir yani unitprice,rate ise ilk parametremizdir yani kdv li fiyat kısmı
  //İkinci parametreyi yazmak istiyorsak
  //rate:number,x:number şeklinde devam edebiliriz
  transform(value: number, rate:number ): number {
    return value + (value*value/100);
  }

}
