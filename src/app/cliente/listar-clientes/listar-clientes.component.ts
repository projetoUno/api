import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente.model'
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[]
  constructor(private service: ClienteService, private rota: Router) { }

  ngOnInit(): void {
    this.service.lista().subscribe(dados => this.clientes = dados)
    
  }

  editar(id: number){
    this.rota.navigate(['cadastro/'+id])
    console.log(id)
  } 
  remover(id: number){
    this.service.removerCliente(id).subscribe(() =>{
      this.service.showMensagem("Cliente excluido com sucesso")
    
      
    })
    this.rota.navigate(['/listar'])
  }

}
