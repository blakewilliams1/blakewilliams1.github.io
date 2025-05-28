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
	private readonly ACTION_CHANGE_INTERVAL_MS = 4000;
  readonly ACTIVITIES_LIST_URL =
    'https://raw.githubusercontent.com/blakewilliams1/blakewilliams1.github.io/main/src/assets/current_activities.txt';
	private activityRandomIndexOrder: number[] = [];
	// Guards against client-side-only code from being ran server-side.
  private isBrowser: boolean;
	allCurrentActivities: string[] = [''];

	constructor(
			private renderer: Renderer2,
			private readonly konamiService: KonamiCodeService,
			@Inject(PLATFORM_ID) private platformId: Object,
			private readonly httpClient: HttpClient) {
		this.isBrowser = isPlatformBrowser(this.platformId);
	}

	ngAfterViewInit () {
		// Prevent hydration breaking errors by only modifying the DOM if this is being ran client side in the browser.
		if (this.isBrowser) {
			this.konamiService.registerListener();

			// Load the contents of the txt file containing all the current activities, then save it as a class member.
			this.httpClient.get(this.ACTIVITIES_LIST_URL, {responseType: 'text'})
					.subscribe((response) => {
						this.allCurrentActivities = response.split('\n').filter(str => str.trim() !== "") || [];

						// Once we've acquired the list of actions I'm 'currently doing', initiate the repeating call to scroll
						// through them all. setTimeout() is needed to schedule the animations in next update loop, after
						// this.allCurrentActivities has been set.
						setTimeout(() => this.scrollingTask());
					});
		}
	}

	private scrollingTask() {
		const actions: Element[] = this.actionsList.nativeElement.children;
		const containerOffsetTopPx = (actions[0] as HTMLElement).offsetTop;
		// Refill the activity presentation order list if it's empty again. This ensures no repeats till all have been
		// shown once.
		if (this.activityRandomIndexOrder.length == 0) {
			// Randomize the order of the array to uniquely show all, but in a random order before repeats.
			this.activityRandomIndexOrder = Array.from({ length: this.allCurrentActivities.length }, (_, i) => i);
			for (let i = this.activityRandomIndexOrder.length - 1; i > 0; i--) {
				const swapIndex = Math.floor(Math.random() * (this.activityRandomIndexOrder.length));
				const valueA = this.activityRandomIndexOrder[i];
				const valueB = this.activityRandomIndexOrder[swapIndex];
				this.activityRandomIndexOrder[i] = valueB;
				this.activityRandomIndexOrder[swapIndex] = valueA;
			}
		}
	
		// The default value is never expected tyo be used, but is here to satisfy the static compiler.
		const targetActionIndex: number = this.activityRandomIndexOrder.pop() || 0;
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
		setTimeout(() => this.scrollingTask(), this.ACTION_CHANGE_INTERVAL_MS);
	}
}
