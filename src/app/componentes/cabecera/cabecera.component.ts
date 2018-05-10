import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  usuario:string;
  logeado:boolean;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   this.usuario = localStorage.getItem('usuario');
    if(this.usuario != null){
      this.logeado = false;
    }
    else{
      this.logeado = true;
    }
  }
  LogOut(){
   
    localStorage.removeItem('usuario');
    this.logeado = true; 
  }

}
