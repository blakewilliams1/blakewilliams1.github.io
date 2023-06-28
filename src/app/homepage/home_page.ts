import { Component, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { KonamiCodeService } from '../sharedcomponents/konamicodeservice/konami_code_service';

@Component({
    selector: 'home-page',
    templateUrl: './home_page.html',
    styleUrls: ['./home_page.scss']
})
export class HomePage {
    @ViewChild('tabgroup') tabGroup!: MatTabGroup;
    readonly languageSkills: Skill[] = [
        {label: 'Java', percent: 90},
        {label: 'Typescript', percent: 80},
        {label: 'Javascript', percent: 80},
        {label: 'C++', percent: 70},
        {label: 'Kotlin', percent: 40},
        {label: 'Dart', percent: 30},
    ];

    // Gets a descriptive word to match the skill percentage.
    getSkillDescriptor(percent: number): string {
        if (percent >= 95) {
            return 'Master';
        } else if (percent >=80) {
            return 'Advanced';
        } else if (percent >=60) {
            return 'Proficient';
        } else if (percent >=40) {
            return 'Competant';
        } else if (percent >=20) {
            return 'Novice';
        } else {
            return 'Beginner';
        }
    }

    constructor(
        private readonly router: Router,
        private readonly konamiService: KonamiCodeService) {
        console.log('(͡ ͡° ͜ つ ͡͡°) nosey now, aren\'t we?')
        konamiService.registerListener();
    }
}

interface Skill {
    label: string;
    percent: number;
}