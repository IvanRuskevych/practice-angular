import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase',
  standalone: true,
  pure: true,
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    const words = value.split(' ');
    return words.join('-');
  }
}
