import { Carro } from './../../cliente/cliente.model';
import { VeiculosService } from './../veiculos.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  veiculos: Carro[]
  constructor(private service: VeiculosService) { }

  ngOnInit(): void {
    this.service.lista().subscribe(dados => this.veiculos = dados)
  }

}
