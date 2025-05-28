import { KonamiCodeService } from '../sharedcomponents/konamicodeservice/konami_code_service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'home-page',
    templateUrl: './home_page.html',
    styleUrls: ['./home_page.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        HttpClientModule,
    ],
})
export class HomePage implements AfterViewInit {
  @ViewChild('actionContainer') actionContainer: ElementRef;
  @ViewChild('actions') actionsList: ElementRef;
  readonly CONFIG_FILE_URL =
    'https://raw.githubusercontent.com/blakewilliams1/blakewilliams1.github.io/main/src/assets/current_activities.txt';
	currentActivities: string[] = [
		'first',
		'second',
		'third',
		'fourth',
		'fifth'
	];
  isBrowser: boolean;
	private readonly ACTION_CHANGE_INTERVAL_MS = 5000;
	readonly scrollingTask = () => {
		const actions: Element[] = this.actionsList.nativeElement.children;
		const containerOffsetTopPx = (actions[0] as HTMLElement).offsetTop;
		// Select a new index of an action to show on screen that is unique from the current one.
		let targetActionIndex = -1;
		do {
			targetActionIndex = Math.floor(this.currentActivities.length * Math.random());
		}		while (this.previousTargetActionIndex == targetActionIndex && actions.length > 1);
		this.previousTargetActionIndex = targetActionIndex;
 
		// Calculate the vertical distance between the top of the container for the actions and the action about to be
		// displayed.
		const targetChild = this.actionsList.nativeElement.children[targetActionIndex];
		const yTranslateOffset = -((targetChild as HTMLElement).offsetTop - containerOffsetTopPx);
		// Ensure that the viewport into the current action is tall enough to show the entry if it wraps.
		const height = (targetChild as HTMLElement).offsetHeight;
		this.renderer.setStyle(
				this.actionsList.nativeElement,
				'height',
				`${height}px`);

		// Shift all the actions up or down based on the calculated amount to show the the current one.
		for (const child of actions) {
			this.renderer.setStyle(
					child,
					'transform',
					`translateY(${yTranslateOffset}px)`);
		}

		// Re-trigger the same task again at the desired interval.
		setTimeout(this.scrollingTask, this.ACTION_CHANGE_INTERVAL_MS);
	}
	private previousTargetActionIndex = 0;

	constructor(
			private renderer: Renderer2,
			private readonly konamiService: KonamiCodeService,
			@Inject(PLATFORM_ID) private platformId: Object,
			private readonly httpClient: HttpClient) {
		this.isBrowser = isPlatformBrowser(this.platformId);
	}

	ngAfterViewInit () {
		console.log('(͡ ͡° ͜ つ ͡͡°) nosey now, aren\'t we?')
		// Prevent hydration breaking errors by only modifying the DOM if this is being ran client side in the browser.
		if (this.isBrowser) {
		this.konamiService.registerListener();

		// Load the contents of the txt file containing all the current activities, then save it as a class member.
		this.httpClient.get(this.CONFIG_FILE_URL, {responseType: 'text'})
					.subscribe((response) => {
						this.currentActivities = response.split('\n').filter(str => str.trim() !== "") || [];
					});

					// Once we've acquired the list of actions I'm 'currently doing', initiate the repeating call to scroll
					// through them all.
					this.scrollingTask();
		}
	}
}
