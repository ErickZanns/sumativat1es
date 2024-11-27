import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  email: string = '';

  @Output() emailChange = new EventEmitter<string>();

  onEmailChange(email: string) {
    this.email = email;
    this.emailChange.emit(this.email); // Emitir el cambio
  }
}