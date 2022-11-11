import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoSanitizerPipe } from "./video-sanitizer.pipe";

@NgModule({
    declarations: [VideoSanitizerPipe],
    exports: [VideoSanitizerPipe]
})

export class PipesModule { }