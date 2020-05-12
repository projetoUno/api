import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // nome = "Daniel"
  // adicionado = false
  // funcionario = []

  // adicionar(){
  //   console.log(this.nome)
  //   this.adicionado = true
  //   this.funcionario.push(this.nome)
  // }
}
