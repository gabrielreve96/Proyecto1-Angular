import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";



interface Empleado {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

@Component({
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css'],
    imports: [CommonModule],
})


export class EmpleadosComponents {
     
    private  url = "https://jsonplaceholder.typicode.com/users";
    public empleados:   Empleado[] = [];

    constructor() {
        this.fetchEmpleados();
    }
 
    private fetchEmpleados() {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.empleados = data;
            })
            .catch(error => console.error('Error fetching empleados:', error));
    }


}