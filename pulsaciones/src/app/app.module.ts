import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';
import{FormsModule} from '@angular/forms';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';
import { InicioComponent } from './inicio/inicio.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroPersonaComponent,
    ConsultarPersonaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
