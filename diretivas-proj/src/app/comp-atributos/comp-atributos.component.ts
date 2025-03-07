import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit{
  
  estilo:string = "sim"
  corDaFonte:string = 'red'
  corDoFundo:string = 'blue';
  item:string = ""
  lista:string[] = []
  isEnableBlock: boolean = true

  constructor(){}

  ngOnInit(): void {}

  mudar(): void{
    if (this.estilo == "sim") {
      this.estilo = "nao"
    } else {
      this.estilo = "sim"
    }

  }

  adicionarLista(){
    this.lista.push(this.item)
  }
  
}
