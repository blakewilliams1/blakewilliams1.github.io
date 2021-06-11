import { Component, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
    selector: 'home-page',
    templateUrl: './home_page.html',
    styleUrls: ['./home_page.scss']
})
export class HomePage {
    @ViewChild('tabgroup') tabGroup!: MatTabGroup;

    constructor(private readonly router: Router) {}
}
