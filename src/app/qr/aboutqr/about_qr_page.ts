import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Title } from '@angular/platform-browser';
import { ImageResizerDirectiveModule } from "../../sharedcomponents/imageresizerdirective/image_resizer_directive_module";

@Component({
    selector: 'about-qr-page',
    templateUrl: './about_qr_page.html',
    styleUrls: ['./about_qr_page.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        CommonModule,
        ImageResizerDirectiveModule,
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