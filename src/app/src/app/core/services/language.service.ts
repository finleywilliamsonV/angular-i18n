import {
  ApplicationRef,
  ChangeDetectorRef,
  Injectable,
  NgZone,
} from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

const SUPPORTED_LANGUAGES = ['en-US', 'pt-BR', 'ko-KR'] as const;
export type AvailableLanguage = typeof SUPPORTED_LANGUAGES[number];

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * Private behavior subject for the application language
   */
  private _$language: BehaviorSubject<AvailableLanguage> =
    new BehaviorSubject<AvailableLanguage>('en-US');

  /**
   * Publicly-exposed Observable for application language
   */
  public $language: Observable<AvailableLanguage> =
    this._$language.asObservable();

  constructor() {}

  /**
   * Gets the current application language
   * @returns the last emitted value from the language behavior subject
   */
  getLanguage(): AvailableLanguage {
    return this._$language.getValue();
  }

  /**
   * Sets the application language
   * @param newLanguage the language to set the application to
   */
  setLanguage(newLanguage: AvailableLanguage): void {
    // ensure the language is unique
    if (newLanguage != this._$language.getValue()) {
      this._$language.next(newLanguage);
    }
  }
}
