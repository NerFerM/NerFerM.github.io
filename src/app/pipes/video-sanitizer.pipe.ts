import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoSanitizer'
})
export class VideoSanitizerPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {

  }

  transform( vid: any ): any {
    return this.domSanitizer.bypassSecurityTrustUrl( vid );
  }

}
