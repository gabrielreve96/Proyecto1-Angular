import { computed, effect, Injectable, InjectDecorator, signal } from "@angular/core";
import { productos } from "../../interface/productos";


function productsLocalStorage(): productos[] {
   const products =  localStorage.getItem('mis productos');
   return products ? JSON.parse(products) : []
}


@Injectable({providedIn:'root'})
export class ProductosPagesServices{
    public productos=   signal<productos[]>(productsLocalStorage());
    saveDataProduct = effect(()=>{
        localStorage.setItem('mis productos' , JSON.stringify(this.productos()))
        console.log(`total de prpoductos son` , this.productos().length)
    })

    public cantidadProductos =computed(
      ()=> this.productos().length
    )
    
    
    newProduct(producto:productos){
      this.productos.update(p=> [...p , producto])
    }
    
    
    deleteProducto(id: number) {
      this.productos.update(productos => productos.filter(p => p.id !== id));
    }




}