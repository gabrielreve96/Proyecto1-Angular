import { ChangeDetectionStrategy, Component, Output, EventEmitter, signal } from '@angular/core';
import { Personaje } from '../../interface/personajes';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nuevopersonaje',
  imports: [CommonModule],
  templateUrl: './nuevopersonaje.component.html',
  styleUrls: ['./nuevopersonaje.component.css'],

})
export class NuevopersonajeComponent {
    public nombre= signal<string>('');
    public poder= signal<number>(0);
    @Output() nuevoPersonaje  = new EventEmitter<Personaje>();
    modal: boolean = false;

   
    mostrarModal() {
        this.modal = !this.modal;
    }


     crearPersonaje() {
        const nuevoPersonaje: Personaje = {
            id: Math.floor(Math.random() * 1000), // Genera un ID aleatorio
            nombre: this.nombre(),
            poder: this.poder()
        };
        this.nuevoPersonaje.emit(nuevoPersonaje);
        this.modal = false;
        this.nombre.set(''); // Resetea el nombre
        this.poder.set(0); // Resetea el poder
      
    }

   
 }
