import { Component } from '@angular/core';
import { TextComponent } from "../entradas/text/text.component";
import { EmailComponent } from "../entradas/email/email.component";
import { PasswordComponent } from "../entradas/password/password.component";

@Component({
  selector: 'app-visualizador',
  standalone: true,
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css'],
  imports: [TextComponent, EmailComponent, PasswordComponent]
})
export class VisualizadorComponent {
  password: string = '';
  email: string = '';
  text: string = '';
  animationClass: string = '';



}