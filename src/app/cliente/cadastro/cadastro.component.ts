import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { NgxViacepService } from '@brunoc/ngx-viacep';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cliente: Cliente = {
    nome: "",
    email: "",
     telefone: null,
    ddd: null,
    cpfCnpj: null,
    dataNascimento: "",
    sexo: "",
    cep:"",
    endereco: "",
    complemento: "",
    numero: null,
    bairro: ""
  }
  veiculo = {
    placa: "",
    marca: "",
    modelo: "",
    cor: "",
    tamanho: ""
  }
  veiculos = []
  Endereco = []
  
  constructor( private clienteService : ClienteService, private cep: NgxViacepService, private route: ActivatedRoute, private rota: Router) { }

  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id')
    console.log(id)
    if(id){
      this.clienteService.buscarId(id).subscribe(dados => this.cliente = dados)
      console.log(this.cliente)
    }
  }
  adicionarVeiculos(){
    console.log(this.veiculo)
    this.veiculos.push(this.veiculo)
   this.clienteService.showMensagem("Carro adicionado com sucesso")
   
  }

  procurarCEP(){
    this.cep.buscarPorCep(this.cliente.cep).then( endereco => {
      this.cliente.endereco = endereco.logradouro
      this.cliente.bairro = endereco.bairro
      console.log(endereco);
     }).catch( error => {
      // Alguma coisa deu errado :/
     this.clienteService.showMensagem(error.message);
     });
  }

  limparCampoCliente(){
    this.cliente = {
      nome: "",
      email: "",
       telefone: null,
      ddd: null,
      cpfCnpj: null,
      dataNascimento: "",
      sexo: "",
      cep:"",
      endereco: "",
      complemento: "",
      numero: null,
      bairro: ""
    }
  }

  limparCampoVeiculo(){
    this.veiculo = {
      placa: "",
      marca: "",
      modelo: "",
      cor: "",
      tamanho: ""
    }
  }

  VerificarCPF(cpf: number){
    this.clienteService.validarCPF(cpf).subscribe((valido) =>{
      if(valido){
        this.clienteService.showMensagem("CPF já cadastrado")
      }
     console.log(valido)
    })
  }

  createCliente(): void{
    const id =  this.route.snapshot.paramMap.get('id')
    if (id){
      this.clienteService.atualizarCliente(this.cliente).subscribe(() =>{
        this.clienteService.showMensagem("Cliente alterado com sucesso")
        this.rota.navigate(['/listar'])
      })
    }else{
          let cpf = this.clienteService.validarCPF(this.cliente.cpfCnpj)
          if(cpf){
            this.clienteService.showMensagem("CPF já cadastrado")
          }else{
                  this.clienteService.create(this.cliente).subscribe(() =>{
                      console.log();
                      this.clienteService.showMensagem('Cliente criado com sucesso')
                      this.rota.navigate['/cadastro/:id']
                    })
                  }
                }
              }

  atualizarELimparCampos(){
    this.createCliente
    this.limparCampoCliente
    this.limparCampoVeiculo
    
   
    
  }
}
