import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter';
  count: number = 0;

  increase() {
    this.count = this.count + 1;
  }

  reset() {
    this.count = 0;
  }

  decrease() {
    this.count = this.count - 1;
  }

  check() {
    if (this.count == 0) {
      return false;
    } else {
      return true;
    }
  }
}
