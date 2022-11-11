import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

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
    private camera: Camera,
    toast: ToastController) {}

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
      quality: 40,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      mediaType: this.camera.MediaType.VIDEO,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
  }

  library() {
    const options: CameraOptions = {
      quality: 40,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      mediaType: this.camera.MediaType.VIDEO,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.procesarVideo(options);
  }

  procesarVideo( options: CameraOptions ) {
    this.camera.getPicture(options).then((videoData) => {
      const vid = window.Ionic.WebView.convertFileSrc(videoData);
      console.log(vid);
      this.tempVideos.push(vid);
    }, (err) => {
      //error
    });
  }

}
