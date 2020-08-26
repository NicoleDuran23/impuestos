import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dato = 0;
  iva = 0;
  it = 0;
  utilidad=0;
  resultado: string;

  constructor() {}

  calcularImpuesto() {

    this.iva = this.dato*(13/100) ;
    this.resultado ='iva'; 
   
    this.it = this.dato*(3/100) ;
    this.resultado ='it';
 
    this.utilidad = this.dato - this.iva - this.it;
    this.resultado ='utilidad';
    
   
  }

 

}
