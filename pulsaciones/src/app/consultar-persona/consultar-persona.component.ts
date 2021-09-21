import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../Services/persona-service.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.css']
})
export class ConsultarPersonaComponent implements OnInit {
  personas: Persona[]=[];
  constructor(private personaService: PersonaServiceService) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.personas= this.personaService.get();
  }
}
