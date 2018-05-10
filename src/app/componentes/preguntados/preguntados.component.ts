import { Component, OnInit } from '@angular/core';
import { JuegoPreguntados } from '../../clases/juego-preguntados';
import { forEach } from '@angular/router/src/utils/collection';
import {ButtonModule} from 'primeng/button';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  gano:boolean;
  perdio:boolean;
  spinner:boolean;
  tema: boolean;
  repetidor:any;
  juegoNuevo:JuegoPreguntados;
  iniciar: boolean;
  aceptar:boolean;
  juegos: Array<JuegoPreguntados>;
  juego: JuegoPreguntados;
  constructor(private route: ActivatedRoute,private router: Router) {
    this.gano= false;
    this.perdio= false;
    this.spinner= true;
    this.tema= true;
    this.aceptar=true;
    this.iniciar=false;    
    this.juegoNuevo = new JuegoPreguntados();
    this.juego = new JuegoPreguntados();
    this.juegos = new Array<JuegoPreguntados>();   
    this.crearPreguntas();
    this.AsignarPregunta();    
   // this.CrearJuegoNuevo(); 
   }

  ngOnInit() {
  }
  CrearJuegoNuevo(){
    
    this.HabilitarBotones();
    this.ReiniciarColores();
    this.gano= false;
    this.perdio= false;
    this.spinner= true;
    this.tema= false;
    this.aceptar=true;
    this.iniciar=true;    
    this.juegoNuevo = new JuegoPreguntados();
    this.juego = new JuegoPreguntados();
    this.juegos = new Array<JuegoPreguntados>();   
    this.crearPreguntas();
    this.AsignarPregunta();    
   
   
  }

  Iniciar(){
    this.spinner = false;  
   
    this.repetidor= setInterval(()=>{ 
      clearInterval(this.repetidor);
      this.spinner= true; 
      this.iniciar=true;      
      this.tema= false;           
      }, 1000);
      
      console.log(this.juegoNuevo);
   
  }
  Aceptar(){
    this.tema=true;
    this.aceptar= false;
  }
  Rechazar(){
    this.router.navigate(['/Juegos']);
    this.tema=true;
   


  }
  Respuesta(indice:string){
    if(indice == this.juegoNuevo.respuestaCorrecta.toString()){      
      document.getElementById("respuesta"+indice.toString()).classList.remove('ui-button-info');
      document.getElementById("respuesta"+indice.toString()).classList.add("ui-button-success") ;
      this.DeshabilitarBotones('true');
      this.gano= true;
      this.perdio = false;
    }else{     
      document.getElementById("respuesta"+indice.toString()).classList.remove('ui-button-info');
      document.getElementById("respuesta"+indice.toString()).classList.add("ui-button-danger") ;
      document.getElementById("respuesta"+this.juegoNuevo.respuestaCorrecta).classList.remove("ui-button-info") ;
      document.getElementById("respuesta"+this.juegoNuevo.respuestaCorrecta).classList.add("ui-button-success") ;
      this.DeshabilitarBotones('true');
      this.gano= false;
      this.perdio = true;
    }
   
  }
  DeshabilitarBotones(bool : string){
    document.getElementById("respuesta0").setAttribute('disabled', bool);
    document.getElementById("respuesta1").setAttribute('disabled', bool);
    document.getElementById("respuesta2").setAttribute('disabled', bool);
    document.getElementById("respuesta3").setAttribute('disabled', bool);
  }
  HabilitarBotones(){
    document.getElementById("respuesta0").removeAttribute('disabled');
    document.getElementById("respuesta1").removeAttribute('disabled');
    document.getElementById("respuesta2").removeAttribute('disabled');
    document.getElementById("respuesta3").removeAttribute('disabled');
  }
  ReiniciarColores(){ 
    document.getElementById("respuesta0").classList.remove('ui-button-danger');
    document.getElementById("respuesta1").classList.remove('ui-button-danger');
    document.getElementById("respuesta2").classList.remove('ui-button-danger');
    document.getElementById("respuesta3").classList.remove('ui-button-danger');
    document.getElementById("respuesta0").classList.add('ui-button-info');
    document.getElementById("respuesta1").classList.add('ui-button-info');
    document.getElementById("respuesta2").classList.add('ui-button-info');
    document.getElementById("respuesta3").classList.add('ui-button-info');
  }

  crearPreguntas(){  
    this.juego.tema= "Geografia";
    this.juego.pregunta = "Cual es la capital de Buenos Aires?";
    this.juego.respuestas = ["Capital Federal" , "La Plata","Banfield","Palermo"];        
    this.juego.respuestaCorrecta = 1;
    this.juegos.push(this.juego);
    this.juego = new JuegoPreguntados();
    this.juego.tema = "Deportes";
    this.juego.pregunta = "En que equipo jugo Martin Palermo?";
    this.juego.respuestas = ["River" , "Los andes","Boca","Real madrid"];        
    this.juego.respuestaCorrecta = 2;
    this.juegos.push(this.juego);
    this.juego = new JuegoPreguntados();
    this.juego.tema = "Historia";
    this.juego.pregunta = "En que año comenzo la segunda guerra mundial?";
    this.juego.respuestas = ["1942" , "1843","1956","1945"];        
    this.juego.respuestaCorrecta = 3;
    this.juegos.push(this.juego);


  }
  AsignarPregunta(){
    var indice: number;
    indice= Math.floor((Math.random() * this.juegos.length) );   
    this.juegoNuevo = this.juegos[indice];
    
    
  }

}
