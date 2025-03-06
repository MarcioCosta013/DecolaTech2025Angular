import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType: string = "admin"

  constructor(){
    this.produtos = [
      "Mouse",
      "Teclado",
      "Font",
      "cabo"
    ]
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  adicionar() {
    this.produtos.push("Marcio")
  }

  remover(index:number){
    this.produtos.splice(index, 1)
  }


  
}
