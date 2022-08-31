import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], filter: string): IProduct[] {
    return products.filter((product) => product.title.toLowerCase().includes(filter.toLowerCase()));
  }
}
