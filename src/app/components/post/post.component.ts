import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent implements OnInit {
  @Input() post: Post = {};

  constructor(private videoPlayer: VideoPlayer) {}

  ngOnInit() {}

  play() {
    this.videoPlayer.play('{{post.vids}}').then(() => {
      console.log('Cargando vídeo');
    }).catch(err => {
      console.log(err);
    });
  }
}