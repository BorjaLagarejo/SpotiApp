import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimg'
})
export class NoimgPipe implements PipeTransform {

  transform(images: any[] ): string {

    if ( !images ) {
      return 'assets/img/noimage.png';
    } else if ( images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
