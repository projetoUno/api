import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
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
    cpfCnpj: "",
    dataNascimento: "",
    sexo: "",
    cep:"",
    endereco: "",
    complemento: "",
    numero: null,
    bairro: "",
    carros: []
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
     
      this.clienteService.buscarId(id).subscribe(dados =>{
        this.cliente = dados
        console.log(this.cliente)
        for(var v of this.cliente.carros){
          this.veiculos.push(v)
        }      
      } )
      
    }
  }
  adicionarVeiculos(){
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
    this.cliente 
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
  // cpf(){
  //   str.replace(/[^\d]+/g,'')
  // }

  VerificarCPF(cpf: string){
    let numero = cpf.replace(/[^\d]+/g,'')
    let validarCPF = this.clienteService.VerificarCPF(numero)
    
    this.clienteService.validarCPF(numero).subscribe((valido) =>{
      
      if(valido)this.clienteService.showMensagem("CPF já cadastrado")
      if(!validarCPF)this.clienteService.showMensagem("CPF não existe")
    })
  }

  createCliente(): void{
    const id =  this.route.snapshot.paramMap.get('id')
    if (id){
      this.cliente.carros = this.veiculos
      this.clienteService.atualizarCliente(this.cliente).subscribe(() =>{
        this.clienteService.showMensagem("Cliente alterado com sucesso")
        this.rota.navigate(['/listar'])
      })
    }else{
      let numero = this.cliente.cpfCnpj.replace(/[^\d]+/g,'');
          this.clienteService.validarCPF(numero).subscribe(cpf=>{
            console.log
          
          let validarCPF = this.clienteService.VerificarCPF(numero)
          if(validarCPF){
            this.clienteService.showMensagem("Esse CPF não existe")
          }
          if(cpf){
            this.clienteService.showMensagem("CPF já cadastrado")
          }else{
            this.cliente.carros = this.veiculos
            this.cliente.cpfCnpj = numero
            this.clienteService.create(this.cliente).subscribe(() =>{
              this.clienteService.showMensagem('Cliente criado com sucesso')
              this.rota.navigate['/cadastro/']
             })
                  }
                })
              }
            }
  atualizarELimparCampos(){
    this.createCliente
    this.limparCampoCliente
    this.limparCampoVeiculo
    
   
    
  }
}
