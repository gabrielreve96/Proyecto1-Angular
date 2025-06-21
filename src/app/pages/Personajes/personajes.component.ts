import { CommonModule, NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Personaje {
    id:number;
    nombre: string;
    poder: number;
}
@Component({
    selector: 'app-personajes',
    styleUrls: ['./personajes.component.css'],
    templateUrl: './personajes.component.html',
    imports: [CommonModule],
  
})
export class PersonajesComponent {

    public nombre= signal<string>('');
    public poder= signal<number>(0);
    personajes = signal<Personaje[]>([
        { id: 1, nombre: 'Goku', poder: 9000 },
        { id: 2, nombre: 'Vegeta', poder: 8500 },
        { id: 3, nombre: 'Piccolo', poder: 8000 },
        { id: 4, nombre: 'Gohan', poder: 7000 },
        { id: 5, nombre: 'Krillin', poder: 5000 }
    ])

    modal: boolean = false;


    constructor(){
       this.mostrarDetalles()
    }

   

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


    crearPersonaje() {
        const nuevoPersonaje: Personaje = {
            id: this.personajes().length + 1,
            nombre: this.nombre(),
            poder: this.poder()
        };
        this.personajes.update(personajes => [...personajes, nuevoPersonaje]);
        this.modal = false;
    }

    eliminarPersonaje(id: number) {
        this.personajes.update(personajes => personajes.filter(p => p.id !== id));
    }
    editarPersonaje(id: number, nombre: string, poder: number) {
        this.personajes.update(personajes => 
            personajes.map(p => p.id === id ? { ...p, nombre, poder } : p)
        );
        this.modal = false;
    }

    totalPersonajes(){
        return this.personajes().length;
    }
 
}