import { Component, OnInit } from '@angular/core';
import { Datas } from '../datas';

@Component({
  selector: 'app-ficha-contents',
  templateUrl: './ficha-contents.component.html',
  styleUrls: ['./ficha-contents.component.css']
})
export class FichaContentsComponent implements OnInit {
  fichas = new Datas().fich();
  exercicios = new Datas().exer();
  programa = new Datas().programaA();
  
  constructor() { 
    this.exercicios = new Datas().exer();
  }
    ngOnInit(): void {
  }

}
