import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  usuario : string;
  logeado: boolean;
  constructor() {  
   
  }

  ngOnInit() {
    this.usuario=   localStorage.getItem('usuario');
   
    if(this.usuario != null){
     this.logeado = true;
    }else{
      this.logeado = true;
    }
  }

 

}
