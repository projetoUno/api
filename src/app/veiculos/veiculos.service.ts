import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Carro} from '../veiculos/veiculo.model'

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private readonly carroUrl = "http://localhost:8080/carros"
  constructor( private http: HttpClient) { }

  //Listar Veiculos
lista(){
  return this.http.get<Carro[]>(this.carroUrl)
  }

}
