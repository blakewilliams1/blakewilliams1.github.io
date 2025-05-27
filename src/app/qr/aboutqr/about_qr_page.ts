import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Title } from '@angular/platform-browser';
import { ImageResizerDirective } from "../../sharedcomponents/imageresizerdirective/image_resizer_directive";

@Component({
    selector: 'about-qr-page',
    templateUrl: './about_qr_page.html',
    styleUrls: ['./about_qr_page.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        ImageResizerDirective,
    ],
})
export class AboutQrPage {
    public constructor(private titleService: Title) {
      this.titleService.setTitle("About QR Tattoo");
    }

}

export interface QuestionAndAnswer {
    question: string;
    answer: string;
}