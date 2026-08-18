import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerDialog } from './image_viewer_dialog';

// This annotation makes it a singleton instance, identical across the whole app.
@Injectable({ providedIn: 'root' })
export class ImageViewerDialogService {
  constructor(private dialog: MatDialog) {}

  // Call this from any component to trigger the dialog to open and show the provided photo.
  emitImageClick(imageUrl: string) {
      this.dialog.open(ImageViewerDialog, {
        data: { imageUrl },
        maxWidth: '95vw',
        maxHeight: '95vh',
      });
  }
}
