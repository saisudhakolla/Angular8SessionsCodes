import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureSort',
  pure: false
})
export class ImPureSortPipe implements PipeTransform {

  transform(array: number[], args?: any): any {
    return array.sort((a: number, b: number) => b - a);
  }

}
