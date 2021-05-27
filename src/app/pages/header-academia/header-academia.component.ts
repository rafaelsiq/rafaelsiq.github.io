import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header-academia',
  templateUrl: './header-academia.component.html',
  styleUrls: ['./header-academia.component.css']
})

export class HeaderAcademiaComponent implements OnInit {
  dados: {};
  dadosService: DataService;

  constructor(_dadosService : DataService) {
    this.dadosService = _dadosService;
    this.dados = {}
   }

   Nome = "Rafael Siqueira de Freitas"
   Professor = "Jose"
   Objetivo = "Emagrecimento"

  ngOnInit(): void {    
    this.dados = this.dadosService.getDados()
    console.log(this.dados)
  }
  
  buscarDados = function () {
  }
}
