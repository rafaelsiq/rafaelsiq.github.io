import { Component, OnInit } from '@angular/core';
import { Datas } from '../pages/datas';

@Component({
  selector: 'app-exerciciobprep',
  templateUrl: './exerciciobprep.component.html',
  styleUrls: ['./exerciciobprep.component.css']
})
export class ExerciciobprepComponent implements OnInit {

  constructor() { }
  imagem = "../../../assets/exercicios/"
  imagemFim = ".gif"
  exercicios = new Datas().exer();
  preparatorio =  new Datas().programaB()[0].Exercicios;
  ngOnInit(): void {
  }

}
