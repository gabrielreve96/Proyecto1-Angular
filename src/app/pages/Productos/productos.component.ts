import { Component, computed, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { productos } from "../../interface/productos";
import { NewProductComponent } from "../../components/newProduct/newProduct.component";
import { TableListComponent } from "../../components/Table/table-list/table-list.component";
import { ProductosPagesServices } from "./productos.services";

@Component({
    selector: 'app-productos',
    styleUrls: ['./productos.component.css'],
    templateUrl: './productos.component.html',
    imports: [NewProductComponent, TableListComponent],

})
export class ProductosComponent {
  public productoService = inject(ProductosPagesServices);
}