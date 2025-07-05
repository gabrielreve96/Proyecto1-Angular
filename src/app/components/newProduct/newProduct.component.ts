import { Component, inject, Output, EventEmitter } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { productos } from '../../interface/productos';

@Component({
  selector: 'app-new-product',
  standalone: true,
  templateUrl: './newProduct.component.html',
  styleUrls: ['./newProduct.component.css'],
})
export class NewProductComponent {
  public productService = inject(ProductsServices);

  @Output() dataProduct = new EventEmitter<productos>();

  newProduct() {
    const producto: productos = {
      id: Date.now(),
      nombre: this.productService.nombre(),
      descripcion: this.productService.descripcion(),
    };

    this.dataProduct.emit(producto);

    // Limpiar campos
    this.productService.nombre.set('');
    this.productService.descripcion.set('');
  }
}
