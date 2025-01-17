import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string,limit=50) {
    // return value;
    // return value.toLocaleLowerCase()
    return value.substring(0,limit)+'...'
  }

} 
