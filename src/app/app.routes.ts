import { Routes } from '@angular/router';
import { RedirectComponents } from './pages/Redirect/redirect.cmponent';
import { EmpleadosComponents } from './pages/Empleados/empleados.componets';
import { PersonajesComponent } from './pages/Personajes/personajes.component';
import { ProductosComponent } from './pages/Productos/productos.component';

export const routes: Routes = [
   {
      path:'empleados',
      component:EmpleadosComponents
   }
    ,
    {
       path:'personajes',
       component:PersonajesComponent
    }
    ,
    {
         path:'**',
         redirectTo: 'redirect-fail'
    },
    {

        path:"productos",
        component:ProductosComponent
       
    }
];
