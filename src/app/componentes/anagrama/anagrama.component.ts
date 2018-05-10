import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  iniciar:boolean;
  mostrarPalabra:boolean;
  perdio:boolean;
  gano:boolean;
  palabras:string[] = ['casa', 'arroz' , 'milanesa', 'bicicleta'];
  elejida:string;
  palabraOriginal:string;
  resp:string;
  indice:number;
  intentos:number;
  ordenar:number;
  reordenar:boolean;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.iniciar=false;
    this.mostrarPalabra=true;
    this.perdio=true;
    this.gano=true;
    this.reordenar= true;
  }

  Iniciar(){
    this.intentos= 10;
    this.ordenar=4;
    this.iniciar=true ;
    this.mostrarPalabra=false;
    this.reordenar= false;
    this.indice= Math.floor((Math.random() * this.palabras.length) );  
    this.DesordenarPalabra();
  }
  Verificar(){
    if(this.intentos == 0){
      this.mostrarPalabra=true;
      this.perdio=false;
    }else{

      if(this.resp == this.palabraOriginal){       
        this.mostrarPalabra=true;
        this.gano=false;
      }else{
        this.intentos --;
       
      }
    }
  }
  DesordenarPalabra(){
   if(this.ordenar == 0){
    this.reordenar=true;
   }else{
    this.palabraOriginal = this.palabras[this.indice];
    let palabraElejida = this.palabras[this.indice].split('');
    palabraElejida = palabraElejida.sort(function() {return Math.random() - 0.5});    
    this.elejida= palabraElejida.join('');
    this.ordenar --;
   }
  
  }
  Rechazar(){
    this.router.navigate(['/Juegos']);
  }
  JuegoNuenvo(){
    this.iniciar=false;
    this.mostrarPalabra=true;
    this.gano=true;
    this.perdio=true;
  }

}
