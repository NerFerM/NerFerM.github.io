import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module'
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

@NgModule({
  declarations: [
    PostsComponent, 
    PostComponent,
    AvatarSelectorComponent
  ],
  exports: [
    PostsComponent, 
    AvatarSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  providers: [
    VideoPlayer
  ]
})
export class ComponentsModule {}