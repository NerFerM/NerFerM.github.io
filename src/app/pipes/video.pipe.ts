import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Pipe({
    name: 'video'
})
export class VideoPipe implements PipeTransform {
    transform (vid: string, userId: string): string {
        return `${URL}/posts/video/${userId}/${vid}`;
    }
}