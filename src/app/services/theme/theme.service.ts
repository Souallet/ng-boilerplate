import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme;

  constructor() {
    this.currentTheme = this.getLocalTheme() || this.getUserPreference();
  }

  setDOMTheme() {
    if (this.currentTheme == 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }

  changeTheme(theme: string) {
    this.setLocalTheme(theme);
    this.setDOMTheme();
  }

  getUserPreference() {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  getLocalTheme() {
    return localStorage.getItem('theme');
  }

  setLocalTheme(theme: string) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }
}
