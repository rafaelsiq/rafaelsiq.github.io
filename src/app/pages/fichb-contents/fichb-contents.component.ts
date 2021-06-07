import { Component, OnInit } from '@angular/core';
import { Datas } from '../datas';

@Component({
  selector: 'app-fichb-contents',
  templateUrl: './fichb-contents.component.html',
  styleUrls: ['./fichb-contents.component.css']
})
export class FichbContentsComponent implements OnInit {

  constructor() { }
  fichas = new Datas().fich();
  exercicios = new Datas().exer();
  programa = new Datas().programaA();
  ngOnInit(): void {
  }

}
