import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Title } from '@angular/platform-browser';
import { ImageResizerDirective } from "../../sharedcomponents/imageresizerdirective/image_resizer_directive";
import { YoutubePlaceholder } from '../../sharedcomponents/youtubeplaceholder/youtube_placeholder';

@Component({
    selector: 'about-qr-page',
    templateUrl: './about_qr_page.html',
    styleUrls: ['./about_qr_page.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        ImageResizerDirective,
        YoutubePlaceholder,
    ],
})
export class AboutQrPage {
    constructor(private readonly titleService: Title) {
      this.titleService.setTitle("About QR Tattoo");
    }

}
