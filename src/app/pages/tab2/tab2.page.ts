import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private postsService: PostsService) {}

  post = {
    mensaje: '',
    posicion: false,
  }


  crearPost() {
    console.log(this.post);
    this.postsService.crearPost(this.post);
  }

}
