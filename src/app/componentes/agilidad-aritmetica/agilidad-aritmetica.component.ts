import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
  @Input()
   numeroIngresado: number;
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  spinner:boolean;
  Tiempo: number;
  repetidor:any;
  mensajeResultado: boolean;
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.mensajeResultado = true;
     this.spinner= true;
     this.ocultarVerificar=true;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    let ArrayOperadores = ["+", "-", "*"];
    this.nuevoJuego.numeroUno= Math.floor((Math.random() * 10) + 1);
    this.nuevoJuego.numeroDos = Math.floor((Math.random() * 10) + 1);
    this.nuevoJuego.Operador = ArrayOperadores[( Math.floor((Math.random() * 3) + 0))];
    this.ocultarVerificar=false;

    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);
  }
  verificar()
  {
    this.mensajeResultado = true;
    this.spinner = false;  
   
    switch(this.nuevoJuego.Operador[0]){
      case "*":
        this.nuevoJuego.resultado =  this.nuevoJuego.numeroUno * this.nuevoJuego.numeroDos;
      break;
     /* case "/":
        this.nuevoJuego.resultado =  this.nuevoJuego.numeroUno / this.nuevoJuego.numeroDos;
      break;*/
      case "+":
        this.nuevoJuego.resultado =  this.nuevoJuego.numeroUno + this.nuevoJuego.numeroDos;
      break;
      case "-":
        this.nuevoJuego.resultado =  this.nuevoJuego.numeroUno - this.nuevoJuego.numeroDos;
      break;
    }
    if(this.nuevoJuego.resultado == this.numeroIngresado){
     // alert("gano");
      this.ocultarVerificar=true;
      this.nuevoJuego.gano= true;
      
    }
    else{
     // alert("vuelve a intentarlo");
      this.ocultarVerificar=false;
      this.nuevoJuego.gano= false;
      
    }

    this.ocultarVerificar=true;    
    clearInterval(this.repetidor);
    this.Tiempo=5;
    setInterval(()=>{ 
      this.spinner= true;
      this.mensajeResultado = false;
     // clearInterval(this.repetidor);
      }, 1300);
    
  }  

}
