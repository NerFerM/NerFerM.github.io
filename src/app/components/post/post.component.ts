import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
declare var HKVideoPlayer;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post = {};

  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false
  }

  constructor(private videoPlayer: VideoPlayer) {}

  ngOnInit() {}

  play() {
    this.videoPlayer.play("{{post.video}}").then(() => {
      console.log('Cargando vídeo');
    }).catch(err => {
      console.log(err);
    });
  }
}