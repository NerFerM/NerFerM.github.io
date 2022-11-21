import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { VideoPipe } from '../../pipes/video.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent implements OnInit {
  @Input() post: Post = {};

  constructor(private videoPlayer: VideoPlayer, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {}

  play() {
    this.videoPlayer.play("localhost:3000/posts/video/{{post.usuario._id}}/{{post.vids}}").then(() => {
      console.log('Cargando vídeo');
    }).catch(err => {
      console.log(err);
    });
  }
}