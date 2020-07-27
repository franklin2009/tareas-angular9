import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TareaComponent } from './tarea/tarea.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AcercaComponent } from './acerca/acerca.component';
import { NoFoundComponent } from './tools/no-found.component';
import { LoadingComponent } from './tools/loading.component';

import { TareaService } from './services/tareas';
import {  UsuarioService } from './services/usuarios';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    TareaComponent,
    UsuarioComponent,
    AcercaComponent,
    NoFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [TareaService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
