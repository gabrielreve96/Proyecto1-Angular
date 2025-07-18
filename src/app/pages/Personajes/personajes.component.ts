import { CommonModule, NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { Personaje } from "../../interface/personajes";
import { TableListComponent } from "../../components/Table/table-list/table-list.component";
import { NuevopersonajeComponent } from "../../components/nuevopersonaje/nuevopersonaje.component";

@Component({
    selector: 'app-personajes',
    styleUrls: ['./personajes.component.css'],
    templateUrl: './personajes.component.html',
    imports: [CommonModule, TableListComponent, NuevopersonajeComponent],
  
})
export class PersonajesComponent {

    public nombre= signal<string>('');
    public poder= signal<number>(0);
    personajes = signal<Personaje[]>([
      ])

    modal: boolean = false;


    constructor(){
       this.mostrarDetalles()
    }




    totalPersonajes = computed(() => this.personajes().length);
    
    

    powerClass(id: number) {
        return {
            'text_power': (this.personajes().find(p => p.id === id)?.poder ?? 0) > 8000,
            'text_power_secondary': (this.personajes().find(p => p.id === id)?.poder ?? 0) <= 8000
        };
    }

    mostrarDetalles() {
         return this.personajes;
    }


    mostrarModal() {
        this.modal = !this.modal;
    }


    crearPersonaje(personaje: Personaje) {
       
        this.personajes.update(personajes => [...personajes, personaje]);
        
    }


    editarPersonaje(id: number, nombre: string, poder: number) {
        this.personajes.update(personajes => 
            personajes.map(p => p.id === id ? { ...p, nombre, poder } : p)
        );
        this.modal = false;
    }

    eliminarPersonaje(id: number) {
        this.personajes.update(personajes => 
            personajes.filter(p => p.id !== id)
        );
    }

    
 
}