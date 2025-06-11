import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'image-viewer-dialog',
  template: '<img [src]="data.imageUrl" (click)="closeDialog()"/>',
  styles: `
    img {
      max-width: 95vw;
      max-height: 95vh;
    }
  `,
})
export class ImageViewerDialog {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<ImageViewerDialog>);

  closeDialog() {
    this.dialogRef.close();
  }
}
