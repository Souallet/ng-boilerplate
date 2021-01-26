import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-boilerplate';
  constructor(private translateService: TranslateService) {
    translateService.addLangs(['fr', 'en']);
    translateService.setDefaultLang('fr');
  }
}
