import { ListarComponent } from './veiculos/listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import {ListarClientesComponent} from './cliente/listar-clientes/listar-clientes.component'


const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/:id', component: CadastroComponent },
  { path: 'listar', component: ListarClientesComponent},
  { path: 'listarVeiculos', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
