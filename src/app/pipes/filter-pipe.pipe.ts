import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    //filtr ekısmına girileni küçük harfe çevirip o şekilde filtremele yapacak.Bu olmasaydı büyük küçük harf duyarlılığı var,sıkıntı çıkardı
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
