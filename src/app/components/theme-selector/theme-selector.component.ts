import { ThemeService } from './../../services/theme/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
})
export class ThemeSelectorComponent implements OnInit {
  selectedTheme: string;

  constructor(private themeService: ThemeService) {
    this.selectedTheme = this.themeService.currentTheme;
  }

  ngOnInit(): void {}

  selectTheme(theme: string): void {
    this.themeService.changeTheme(theme);
    this.selectedTheme = this.themeService.currentTheme;
  }
}
