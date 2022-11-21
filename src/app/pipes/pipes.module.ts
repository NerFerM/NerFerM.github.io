import { NgModule } from "@angular/core";
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { VideoSanitizerPipe } from "./video-sanitizer.pipe";
import { VideoPipe } from "./video.pipe";

@NgModule({
    declarations: [DomSanitizerPipe, VideoSanitizerPipe, VideoPipe],
    exports: [DomSanitizerPipe, VideoSanitizerPipe, VideoPipe]
})

export class PipesModule {}