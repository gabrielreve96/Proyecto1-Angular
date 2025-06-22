import { CommonModule } from "@angular/common";
import { Component, computed, signal, Signal } from "@angular/core";
import { TableListComponent } from "../../components/Table/table-list/table-list.component";
import { Empleado } from "../../interface/empleados";




@Component({
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css'],
    imports: [CommonModule, TableListComponent],
})


export class EmpleadosComponents {
     
    private  url = "https://jsonplaceholder.typicode.com/users";
    public empleados = signal<Empleado[]>([]);

    constructor() {
        this.fetchEmpleados();
    }
 
    private fetchEmpleados() {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.empleados.set(data);
            })
            .catch(error => console.error('Error fetching empleados:', error));
    }


    eliminarEmpleado(id: number) {
        this.empleados.update(empleados => empleados.filter(empleado => empleado.id !== id));
    }  
    
    
    totalEmpleados = computed(()=> this.empleados.length)


}