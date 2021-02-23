import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagePost'
})
export class ImagePostPipe implements PipeTransform {

  transform( url?: string): string {

    if(url){      
      return environment.url_api + url;
    }
    else {
      return 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg'
    }
  }

}
