import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageResizerDirective } from 'src/app/sharedcomponents/imageresizerdirective/image_resizer_directive';

@NgModule({
  declarations: [
    ImageResizerDirective,
  ],
  imports: [
      CommonModule,
  ],
  exports: [ImageResizerDirective],
})
export class ImageResizerDirectiveModule { }
