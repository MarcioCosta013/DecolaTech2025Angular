import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { CompAtributosComponent } from "./comp-atributos/comp-atributos.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CommonModule, CompAtributosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'diretivas-proj';

  isAliveCard = true
}
