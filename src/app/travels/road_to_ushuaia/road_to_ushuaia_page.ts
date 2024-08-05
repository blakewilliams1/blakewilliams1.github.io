import { Component } from '@angular/core';

@Component({
  selector: 'road-to-ushuaia-page',
  templateUrl: './road_to_ushuaia_page.html',
 styleUrls: ['./road_to_ushuaia_page.scss']
})
export class RoadToUshuaiaPage { 
  constructor() {
    setTimeout(() => {
      window.location.href = 'https://advrider.com/f/threads/california-to-ushuaia-2024.1750647/page-1000';
    }, 2000);
  }
}
