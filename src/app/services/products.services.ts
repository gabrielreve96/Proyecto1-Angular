import { Injectable, signal } from '@angular/core';
import { productos } from '../interface/productos';

@Injectable({ providedIn: 'root' })
export class ProductsServices {
  public nombre = signal<string>('');
  public descripcion = signal<string>('');

  createProducto(): productos {
    const producto: productos = {
      id: Date.now(),
      nombre: this.nombre(),
      descripcion: this.descripcion(),
    };

    // limpiar
    this.nombre.set('');
    this.descripcion.set('');

    return producto;
  }


  deleteProduct(id:string){
    return   id;
  }
}
