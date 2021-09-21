import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  {
    path: 'personaRegistro',
    component: RegistroPersonaComponent,
  }
  ,{
    path: 'personaConsulta',
    component: ConsultarPersonaComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
