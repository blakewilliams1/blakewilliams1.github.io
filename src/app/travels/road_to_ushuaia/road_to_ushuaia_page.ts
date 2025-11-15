import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'road-to-ushuaia-page',
  templateUrl: './road_to_ushuaia_page.html',
  styleUrls: ['./road_to_ushuaia_page.scss'],
  standalone: true,
  imports: [
      MatCardModule,
  ],
})
export class RoadToUshuaiaPage {
  readonly advRiderURL = 'https://advrider.com/f/threads/1750647/page-1000';
  constructor(private readonly router: Router) {
    setTimeout(() => {
      window.open(this.advRiderURL, '_blank', 'noopener,noreferrer');
    }, 2000);
  }
}
