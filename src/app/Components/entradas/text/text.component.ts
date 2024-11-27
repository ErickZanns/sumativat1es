import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  text: string = '';

  @Output() textChange = new EventEmitter<string>();

  onTextChange(text: string) {
    this.text = text;
    this.textChange.emit(this.text); // Emitir el cambio
  }
}