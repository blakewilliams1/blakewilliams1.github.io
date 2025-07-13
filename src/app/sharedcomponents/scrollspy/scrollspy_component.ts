import { CommonModule, isPlatformBrowser, ViewportScroller } from '@angular/common';
import { AfterContentInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'scroll-spy',
  templateUrl: './scrollspy_component.html',
  styleUrls: ['./scrollspy_component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ScrollspyComponent implements AfterContentInit {
  sections: Element[] = [];
  windowReference: Window|undefined = undefined;
  currentViewedSection: Element|undefined = undefined;
  minWindowWidthToDisplay = 1550;
  private isBrowser: boolean;

  constructor(
      private readonly self: ElementRef,
      private viewportScroller: ViewportScroller,
      @Inject(PLATFORM_ID) private platformId: Object) {
		this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.windowReference = window;
    }
  }

  ngAfterContentInit(): void {
    if (!this.isBrowser) {
      return;
    }

    const allElementsWithIds = this.self.nativeElement.parentNode.querySelectorAll('[id]');
    this.sections = Array.from(allElementsWithIds);
    this.sections.sort((a, b) => a.getBoundingClientRect().bottom - b.getBoundingClientRect().bottom);
    this.onWindowScroll();
  }

  onSectionSelect(selectedSection: Element) {
    this.viewportScroller.scrollToAnchor(selectedSection.id);
  }

  getSectionTitle(selectedSection: Element): string {
    let parts = selectedSection.id.split(/[- ]/);
    parts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    return parts.join(' ');
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    // A fairly magic number to ensure that the header still counts even if it's NEARLY scrolled past. Makes it easier
    // in terms of clicking the section headers.
    const scrollYOffset = 50;
    let smallestNegativePositionIndex = 0;
    let smallestNegativePositionValue = -Infinity;
    for (let i = 0; i < this.sections.length; i++) {
      const currBottom = this.sections[i].getBoundingClientRect().bottom - scrollYOffset;
      if (currBottom > smallestNegativePositionValue && currBottom <= 0) {
        smallestNegativePositionIndex = i;
        smallestNegativePositionValue = currBottom;
      }
    }

    // This is used to affect CCS stylings.
    this.currentViewedSection = this.sections[smallestNegativePositionIndex];
  }
}
