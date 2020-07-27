import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './contacto/contacto.component';
import { TareaComponent } from './tarea/tarea.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AcercaComponent } from './acerca/acerca.component';
import { NoFoundComponent } from './tools/no-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/tarea', pathMatch: 'full' },
  { path: 'tarea', component: TareaComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }