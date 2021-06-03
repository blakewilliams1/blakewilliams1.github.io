import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
    selector: 'home-page',
    templateUrl: './home_page.html',
    styleUrls: ['./home_page.scss']
})
export class HomePage implements AfterViewInit {
    @ViewChild('tabgroup') tabGroup!: MatTabGroup;

    constructor(private readonly router: Router) {}

    ngAfterViewInit() {
        // TODO: Remove this in favor of proper lazy loading.
        let selectedIndex = 1;
        switch (this.router.url) {
            case '/about':
                selectedIndex = 0;
                break;
            case '/':
                selectedIndex = 1;
                break;
            case '/projects':
                selectedIndex = 2;
                break;
        }
        
        this.tabGroup.selectedIndex = selectedIndex;
    }

    changeUrl(route: MatTabChangeEvent) {
        let newRoute = '';
        switch (route.index) {
            case 0:
                newRoute = 'about';
                break;
            case 1:
                newRoute = '';
                break;
            case 2:
                newRoute = 'projects';
                break;
        }
        this.router.navigate([newRoute]);
    }
}
