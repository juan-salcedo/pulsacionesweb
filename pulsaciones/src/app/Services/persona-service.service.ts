import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  constructor() { }

  post(persona: Persona){
    let personas:Persona[] = [];
    if(this.get().length>0){
      personas=this.get();
    }
    if(persona.sexo=="m"){
      persona.pulsacion=(220-persona.edad)/10;
    }else{
      persona.pulsacion=(210-persona.edad)/10;
    }
    alert("La pulsacion es "+ persona.pulsacion );

    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify(personas));
  }

  get():Persona[] {
    return JSON.parse(localStorage.getItem('personas')||'{}');
  }

}

