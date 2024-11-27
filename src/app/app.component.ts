import { Component } from '@angular/core';
import { VisualizadorComponent } from './Components/visualizador/visualizador.component';
import { ModoOscuroComponent } from './Components/botones/modo-oscuro/modo-oscuro.component';
import { BotonPrimarioComponent } from './Components/botones/boton-primario/boton-primario.component';
import { BotonSecundarioComponent } from './Components/botones/boton-secundario/boton-secundario.component';
import { BotonAceptarComponent } from './Components/botones/boton-aceptar/boton-aceptar.component';
import { BotonCancelarComponent } from './Components/botones/boton-cancelar/boton-cancelar.component';
import { PasswordComponent } from './Components/entradas/password/password.component';
import { EmailComponent } from './Components/entradas/email/email.component';
import { TextComponent } from './Components/entradas/text/text.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    VisualizadorComponent,
    ModoOscuroComponent,
    BotonPrimarioComponent,
    BotonSecundarioComponent,
    BotonAceptarComponent,
    BotonCancelarComponent,
    PasswordComponent,
    EmailComponent,
    TextComponent,
    NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sumtiva';
}