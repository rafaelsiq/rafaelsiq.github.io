import { Component, OnInit } from '@angular/core';
import { Datas } from '../pages/datas';

@Component({
  selector: 'app-exerciciobmusc',
  templateUrl: './exerciciobmusc.component.html',
  styleUrls: ['./exerciciobmusc.component.css']
})
export class ExerciciobmuscComponent implements OnInit {

  constructor() { }
  imagem = "../../../assets/exercicios/"
  imagemFim = ".gif"
  exercicios = new Datas().exer();
  preparatorio =  new Datas().programaB()[0].Exercicios;
  musculacao =  new Datas().programaB()[1].Exercicios;
  cardio =  new Datas().programaB()[2].Exercicios;
  alongamento =  new Datas().programaB()[3].Exercicios;
  ngOnInit(): void {
  }

}
