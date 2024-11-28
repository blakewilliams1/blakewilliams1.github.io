import { NgModule } from '@angular/core';
import { ImageResizerDirective } from 'src/app/sharedcomponents/imageresizerdirective/image_resizer_directive';

@NgModule({
  declarations: [
    ImageResizerDirective,
  ],
  exports: [ImageResizerDirective],
})
export class ImageResizerDirectiveModule { }
