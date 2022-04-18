import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformat',
})
export class DateformatPipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]) {
    const date = new Date(value);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US');
  }
}
