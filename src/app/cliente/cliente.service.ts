import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly baseUrl = "https://lavajato-api.herokuapp.com/clientes"
  constructor(private alert: MatSnackBar, private http: HttpClient) { }

  showMensagem(msg : string): void {
    this.alert.open(msg,' X ', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
    
  })
}
create(cliente: Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.baseUrl, cliente)
}
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
validarCPF(cpf: number): Observable<Cliente>{
  const url = `${this.baseUrl}/cpf/${cpf}`
  return this.http.get<Cliente>(url);
}

removerCliente(id: number): Observable<Cliente>{
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Cliente>(url)
}

}
