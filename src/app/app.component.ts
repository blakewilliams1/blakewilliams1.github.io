import { AfterViewInit, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterModule, ResolveEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
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
