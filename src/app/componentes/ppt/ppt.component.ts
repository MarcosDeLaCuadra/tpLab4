import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  iniciar:boolean;
  mostrarImg:boolean;
  resultado:boolean;
  gano:boolean;
  perdio:boolean;
  imgResul:boolean;
  constructor(private route: ActivatedRoute,private router: Router) {
    this.iniciar=false;
    this.mostrarImg=true;
    this.resultado= true;
    this.imgResul=true;
   }

  ngOnInit() {

  }

  Iniciar(){
    this.iniciar=true;
    this.mostrarImg=false;
    this.gano=false;
    this.perdio=false;
  }
  Elejir(seleccion:string){
    let elementos:string[];
   
    switch (seleccion) {
      case 'piedra':
        elementos= ["papel", "tijeras"];
        let respuestaMaquina = elementos[Math.floor((Math.random() * 2) )];
        this.MostrarImg(seleccion, respuestaMaquina);
       if(  this.Resultado(seleccion , respuestaMaquina) == 'gano'){
        this.gano= true;       
       }else{
         this.perdio=true;
       }
      
      break;
      case 'papel':
      elementos= ["tijeras", "piedra"];
      let respuestaMaquina1 = elementos[Math.floor((Math.random() * 2) )];
      this.MostrarImg(seleccion, respuestaMaquina1);
      if(  this.Resultado(seleccion , respuestaMaquina1) == 'gano'){
        this.gano= true;       
       }else{
         this.perdio=true;
       }    
      break;
    
      case 'tijeras':
      elementos= ["papel", "piedra"];
      let respuestaMaquina2 = elementos[Math.floor((Math.random() * 2) )];
      this.MostrarImg(seleccion, respuestaMaquina2);
      if(  this.Resultado(seleccion , respuestaMaquina2) == 'gano'){
        this.gano= true;       
       }else{
         this.perdio=true;
       }  
      break;

    
      default:
        break;
    }
  }
  Rechazar(){
    this.router.navigate(['/Juegos']);
  }
  CrearJuegoNuevo(){
    this.iniciar=false;
    this.imgResul=true;
    this.mostrarImg=true;
    this.gano=false;
    this.perdio=false;
    this.resultado= false;
    document.getElementById("elejido").innerHTML=  "";
      document.getElementById("maquina").innerHTML= "";
  }
  MostrarImg(elejido:string, random:string){
    this.mostrarImg = true;
    this.resultado = false;
    this.imgResul=false;
    document.getElementById("elejido").innerHTML=  '<img class="img-thumbnail mostrarImg" src="./assets/imagenes/'+elejido+'.png" alt="Avatar" >';
    document.getElementById("maquina").innerHTML=  '<img class="img-thumbnail mostrarImg" src="./assets/imagenes/'+random+'.png" alt="Avatar" >';
   
  }
  Resultado(elejido:string, random:string){
    if(elejido == 'piedra' && random == 'tijeras'){
      return 'gano';
    }
    if(elejido == 'piedra' && random == 'papel'){
      return 'perdio';
    }
    if(elejido == 'papel' && random == 'piedra'){
      return 'gano';
    }
    if(elejido == 'papel' && random == 'tijeras'){
      return 'perdio';
    }
    if(elejido == 'tijeras' && random == 'papel'){
      return 'gano';
    }
    if(elejido == 'tijeras' && random == 'piedra'){
      return 'perdio';
    }
  }
}
