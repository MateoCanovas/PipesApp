import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre : string = 'Fernandno';
  valor: number = 1000;

  cambiarNombre(): void {
    this.nombre = 'Mateo';
  }
}
