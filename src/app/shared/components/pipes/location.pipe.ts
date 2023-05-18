import { Pipe, PipeTransform } from '@angular/core';
import { Ilocation } from '../../model/fairs';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    console.log(value);
    if (typeof value === 'object') {
      return value.city
    } else if (typeof value === 'string') {
      return
    } else {
      return
    }




  }

}
