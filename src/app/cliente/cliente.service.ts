import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Cliente, Carro } from './cliente.model';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 // private readonly baseUrl = "http://localhost:8080/clientes"
 private readonly baseUrl = "https://lavajato-back.herokuapp.com/clientes"

  private readonly carroUrl = "https://lavajato-back.herokuapp.com/carros"
  // private readonly carroUrl = "http://localhost:8080/carros"
  constructor(private alert: MatSnackBar, private http: HttpClient) { }

  showMensagem(msg : string): void {
    this.alert.open(msg,' X ', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
    
  })
}
//Salvar Cliente
create(cliente: Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.baseUrl, cliente)
}
//Salvar Carro
salvarCarro(veiculo: Carro): Observable<Carro>{
  return this.http.post<Carro>(this.carroUrl, veiculo)
}

//Listar Clientes
lista(){
  return this.http.get<Cliente[]>(this.baseUrl)
  }
buscarId(id: string): Observable<Cliente>{
  const url = `${this.baseUrl}/${id}`
   return this.http.get<Cliente>(url)
 }

 atualizarCliente(cliente: Cliente) : Observable<Cliente>{
  return this.http.post<Cliente>(this.baseUrl, cliente)
 }
validarCPF(cpf: string): Observable<Cliente>{
  const url = `${this.baseUrl}/cpf/${cpf}`
  return this.http.get<Cliente>(url);
}

removerCliente(id: number): Observable<Cliente>{
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Cliente>(url)
}


VerificarCPF(cpf:string){
  cpf = cpf.replace(/\D/g, '');
  if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9,10].forEach(function(j){
      var soma = 0, r;
      cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
          soma += parseInt(e) * ((j+2)-(i+1));
      });
      r = soma % 11;
      r = (r <2)?0:11-r;
      if(r != cpf.substring(j, j+1)) result = false;
  });
  return result;
}

}
