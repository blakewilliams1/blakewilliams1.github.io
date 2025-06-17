import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ResolveEnd, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngAfterViewInit() {
      this.router.events.subscribe((event) => {
        // Reduces excessive times this observable pipe is executed.
        if (!(event instanceof ResolveEnd)) {
            return;
          }

        this.currentRoute = event.url;
    });
  }
}
