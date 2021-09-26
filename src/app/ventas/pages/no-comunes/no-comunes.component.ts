import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

interface Cliente {
  nombre: string,
  genero: string
}

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nPlural
  clientes: Cliente[] = [ {nombre: 'Mateo', genero: 'masculino'}, 
                          {nombre: 'Mary', genero: 'femenino'},
                          {nombre: 'Juan', genero: 'masculino'},
                          {nombre: 'Irene', genero: 'femenino'}
                        ];

  nombres: string[] = ['Mateo', 'Mary', 'Juan', 'Irene'];

  mapperPlural= {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // i18nSelect
  cliente: Cliente = this.clientes[0]

  mapperSelect = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // keyValuePipe 
  persona = {
    nombre: 'Mateo',
    edad: 35,
    direccon: 'Murcia, España'
  }

  //Async pipe
  miObservable = interval(1000); // 0, 1, 2, 3, 4

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa.');
    }, 3500);
  });

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarNombre(): void {
    if (this.clientes.length > 1) {
      if (this.cliente.nombre === this.clientes[0].nombre) {
        this.cliente = this.clientes[1];
      } else {
        this.cliente = this.clientes[0];
      }
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }

}
