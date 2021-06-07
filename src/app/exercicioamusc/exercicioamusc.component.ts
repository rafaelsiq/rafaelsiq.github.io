import { Component, OnInit } from '@angular/core';
import { Datas } from '../pages/datas';

@Component({
  selector: 'app-exercicioamusc',
  templateUrl: './exercicioamusc.component.html',
  styleUrls: ['./exercicioamusc.component.css']
})
export class ExercicioamuscComponent implements OnInit {

  constructor() { 
  }
  imagem = "../../../assets/exercicios/"
  imagemFim = ".gif"
  exercicios = new Datas().exer();
  preparatorio =  new Datas().programaA()[0].Exercicios;
  musculacao =  new Datas().programaA()[1].Exercicios;
  cardio =  new Datas().programaA()[2].Exercicios;
  alongamento =  new Datas().programaA()[3].Exercicios;
  ngOnInit(): void {
  }

}
