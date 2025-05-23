import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet, Router, RouterModule, NavigationEnd, ResolveEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatTabsModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // @ViewChild('homeTab', { read: ElementRef }) homeTab: ElementRef;
  // @ViewChild('travelsTab') travelTab: ElementRef;
  // @ViewChild('projectsTab') projectsTab: ElementRef;
  // @ViewChild('careerTab') careerTab: ElementRef;

  constructor(private router: Router,private renderer: Renderer2) {
  }

  // ngAfterViewInit() {
  //     this.router.events.subscribe((event) => {
  //       if (!(event instanceof ResolveEnd)) {
  //         return;
  //       }

  //       switch (event.url) {
  //         case '/':
  //           console.log('home');
  //           this.homeTab.nativeElement.style.color = 'white';
  //           break;
  //         case '/travels':
  //           console.log('travels');
  //           this.travelTab.nativeElement.style.color = 'white';
  //           break;
  //         case '/projects':
  //           console.log('projects');
  //           this.projectsTab.nativeElement.style.color = 'white';
  //           break;
  //         case '/career':
  //           console.log('home');
  //           this.careerTab.nativeElement.style.color = 'white';
  //           break;
  //         default: return;
  //       }
  //       console.log(event);
  //     }).unsubscribe();
  //   }
}
