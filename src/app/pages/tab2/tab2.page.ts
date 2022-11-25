import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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

  constructor (private postsService: PostsService,
    browserModule: BrowserModule,
    common: CommonModule,
    private route: Router,
    private camera: Camera) {}

  async crearPost() {
    console.log(this.post);
    const creado = await this.postsService.crearPost(this.post);
    this.post = {
      mensaje: '',
    };
    this.tempVideos = [];
    this.route.navigateByUrl('/main/tabs/tab1');
  }

  //camara() {
  //  const options: CameraOptions = {
  //    quality: 40,
  //    destinationType: this.camera.DestinationType.NATIVE_URI,
  //    mediaType: this.camera.MediaType.VIDEO,
  //    correctOrientation: true,
  //    sourceType: this.camera.PictureSourceType.CAMERA
  //  };
  //  this.procesarVideo(options);
  //}

  library() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      mediaType: this.camera.MediaType.VIDEO,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.procesarVideo(options);
  }

  procesarVideo(options: CameraOptions) {
    this.camera.getPicture(options).then((videoData) => {
      const vid = window.Ionic.WebView.convertFileSrc(videoData);
      this.postsService.subirVideo(videoData);
      this.tempVideos.push(vid);
    }, (err) => {
      console.log(Error);
    });
  }
}