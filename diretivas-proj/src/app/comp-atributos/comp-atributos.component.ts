import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  imports: [CommonModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit{
  
  estilo:string = "sim"

  constructor(){}

  ngOnInit(): void {}

  mudar(): void{
    if (this.estilo == "sim") {
      this.estilo = "nao"
    } else {
      this.estilo = "sim"
    }

  }
  
}
