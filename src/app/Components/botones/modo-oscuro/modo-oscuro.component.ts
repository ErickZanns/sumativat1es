import { Component } from '@angular/core';

@Component({
  selector: 'app-modo-oscuro',
  standalone: true,
  templateUrl: './modo-oscuro.component.html',
  styleUrls: ['./modo-oscuro.component.css']
})
export class ModoOscuroComponent {
  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}