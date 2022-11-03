import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';



@NgModule({
  declarations: [
    DomSanitizerPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
