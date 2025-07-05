import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { productos } from "../../interface/productos";
import { NewProductComponent } from "../../components/newProduct/newProduct.component";
import { TableListComponent } from "../../components/Table/table-list/table-list.component";

@Component({
    selector: 'app-productos',
    styleUrls: ['./productos.component.css'],
    templateUrl: './productos.component.html',
    imports: [NewProductComponent, TableListComponent],

})
export class ProductosComponent {
public productos=   signal<productos[]>([]);


newProduct(producto:productos){
  this.productos.update(p=> [...p , producto])
}


deleteProducto(id: number) {
  this.productos.update(productos => productos.filter(p => p.id !== id));
}

      
     

}