import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



interface NavbarLink {
  label: string;
  route: string;
}


@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',

})
export class Navbar {

  public links: NavbarLink[] = [
    { label: 'Home', route: '/' },
    { label: 'Empleado', route: '/empleados' },
    { label: 'Personajes', route: '/personajes' },
    {label:"Productos", route: '/productos'},
  ];

  constructor(){

  }

rutas=computed(()=>{
  return this.links.map(link => ({
    ...link,
    isActive: window.location.pathname === link.route
  }));
})


}
