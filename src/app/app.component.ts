import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Hello and Welcome!';

  constructor() {
    // not sure what this accomplishes yet
    this.title = this.localizeTitle();
  }

  /**
   * Localizes a title string to the current locale
   * @param newTitle the new title you would like to localize
   * @returns the localized title
   */
  localizeTitle(newTitle: string = this.title): string {
    return $localize`${newTitle}`;
  }
}
