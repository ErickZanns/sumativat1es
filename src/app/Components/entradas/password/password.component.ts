import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password: string = '';
  
  @Output() passwordChange = new EventEmitter<string>();

  onPasswordChange(password: string) {
    this.password = password;
    this.passwordChange.emit(this.password); // Emitir el cambio
  }
}