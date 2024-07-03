import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'about-qr-page',
    templateUrl: './about_qr_page.html',
    styleUrls: ['./about_qr_page.scss'],
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