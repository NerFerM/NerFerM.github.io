import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent implements OnInit {
  @Input() post: Post = {};

  constructor(public videoPlayer: VideoPlayer, public domSanitizer: DomSanitizer) {
  }

  ngOnInit() {}

  play() {
    this.videoPlayer.play("http://192.168.0.129:3000/posts/video/{{post.usuario._id}}/{{post.vids}}").then(() => {
      console.log('Cargando vídeo');
    }).catch(err => {
      console.log(err);
    });
  }
}