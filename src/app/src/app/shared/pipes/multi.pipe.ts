import en_US from 'src/locale/en-US.json';
import ko_KR from 'src/locale/ko-KR.json';
import pt_BR from 'src/locale/pt-BR.json';

import { Pipe, PipeTransform } from '@angular/core';

import {
  AvailableLanguage,
  LanguageService,
} from '../../core/services/language.service';

@Pipe({
  name: 'multi',
})
export class MultiPipe implements PipeTransform {
  /**
   * Record of available language translations
   */
  private translations: Record<AvailableLanguage, Record<string, string>> = {
    'en-US': en_US,
    'pt-BR': pt_BR,
    'ko-KR': ko_KR,
  };

  constructor(private languageService: LanguageService) {}

  /**
   * Returns the translated string or the key itself
   * @param stringToTranslate
   * @returns the translated string
   */
  transform(stringToTranslate: string): string {
    const currentLanguage: AvailableLanguage =
      this.languageService.getLanguage();

    const translation: string =
      this.translations[currentLanguage][stringToTranslate];

    return translation ?? stringToTranslate;
  }
}
