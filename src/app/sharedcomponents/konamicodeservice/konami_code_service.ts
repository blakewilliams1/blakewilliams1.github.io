import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KonamiCodeService {
  readonly KONAMI_CODE: string[] =
      ['ArrowUp','ArrowUp', 'ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','KeyB', 'KeyA'];
  // This 'shim' is needed to be able to reference class members on the callback.
  // Just setting checkForCode() as an event listener does not allow it to access class members.
  private readonly keyboardListener: (event: KeyboardEvent) => void;
  inputHistory: string[] = [];

  constructor() {
    this.keyboardListener = (event: KeyboardEvent) => {
      this.checkForCode(event);
    }
  }

  public registerListener() {
  //  document.addEventListener('keydown', this.keyboardListener);
  }

  private checkForCode(event: KeyboardEvent) {
    this.inputHistory.push(event.code);
    if (this.inputHistory.length > 10) {
      this.inputHistory.shift();
    }

    if (this.inputHistory.toString() == this.KONAMI_CODE.toString()) {
      this.inputHistory = [];
      alert('( 👁️ ͜ʖ 👁️ ) you found the secret');
    }
  }
}
