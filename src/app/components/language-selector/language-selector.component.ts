import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  languageList: Array<string> = [];
  currentLanguage: string = '';

  constructor(private translateService: TranslateService) {
    this.currentLanguage = translateService.currentLang;
    this.languageList = translateService.getLangs();
  }

  ngOnInit(): void {}

  changeLanguage(languageCode: string): void {
    this.translateService.use(languageCode);
  }
}
