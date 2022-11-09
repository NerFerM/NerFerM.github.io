import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tempVideos: string[] = [];

  post = {
    mensaje: '',
  }

  constructor( private postsService: PostsService,
    private route: Router,
    private camera: Camera) {}

  async crearPost() {
    console.log(this.post);
    const creado = await this.postsService.crearPost(this.post);
    this.post = {
      mensaje: '',
    };

    this.route.navigateByUrl('/main/tabs/tab1');
  }

  camara() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.MediaType.VIDEO,
      mediaType: this.camera.MediaType.VIDEO,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };
    
    this.camera.getPicture(options).then((videoData) => {
      const videoPath = window.Ionic.WebView.convertFileSrc(videoData);
      console.log(videoPath);
      this.tempVideos.push(videoPath);
      //this.userService.uploadVideo(this.details.id, videoData);
    }, (err) => {
      // Error
    });
  }

}
