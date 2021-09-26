import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = "mateo";
  nombreUpper: string = "MATEO";
  nombreCompleto: string = "mAteO cAnOvAs";

  fecha: Date = new Date(); //El día de hoy


  constructor() { }


}
