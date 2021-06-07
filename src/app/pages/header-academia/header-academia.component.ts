import { Component, OnInit } from '@angular/core';
import { Datas } from '../datas'
@Component({
  selector: 'app-header-academia',
  templateUrl: './header-academia.component.html',
  styleUrls: ['./header-academia.component.css']
})

export class HeaderAcademiaComponent implements OnInit {
  fichas = new Datas().head();
  constructor() {
  }
  Nome = ""
  Professor = ""
  Objetivo = ""

  ngOnInit(): void {
    this.Nome = this.fichas.head.nome;
    this.Professor = this.fichas.head.professor;
    this.Objetivo = this.fichas.head.Objetivo[0] + " - " + this.fichas.head.Objetivo[1];
  }

}
