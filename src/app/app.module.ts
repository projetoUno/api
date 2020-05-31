import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from "@angular/common";
import {MatListModule} from '@angular/material/list'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavegacaoComponent } from './componente/navegacao/navegacao.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TesteComponent } from './componente/teste/teste.component'; 
import {NgxViacepModule} from '@brunoc/ngx-viacep';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { ListarComponent } from './veiculos/listar/listar.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    NavegacaoComponent,
    TesteComponent,
    ListarClientesComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    NgxViacepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
