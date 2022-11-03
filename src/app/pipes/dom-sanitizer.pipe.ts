import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  transform( vid: string ): any {
    return null;
  }

}
