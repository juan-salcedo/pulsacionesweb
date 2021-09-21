import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaServiceService } from '../Services/persona-service.service';
@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {
  persona:Persona;
  constructor(private personaService: PersonaServiceService) {
    this.persona= new Persona();

   }

   add(){
     this.personaService.post(this.persona)
   }

  ngOnInit(): void {
  }

}
