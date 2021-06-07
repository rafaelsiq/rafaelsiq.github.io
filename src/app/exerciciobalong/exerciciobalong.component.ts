import { Component, OnInit } from '@angular/core';
import { Datas } from '../pages/datas';

@Component({
  selector: 'app-exerciciobalong',
  templateUrl: './exerciciobalong.component.html',
  styleUrls: ['./exerciciobalong.component.css']
})
export class ExerciciobalongComponent implements OnInit {

  constructor() { }
  imagem = "../../../assets/exercicios/"
  imagemFim = ".gif"
  exercicios = new Datas().exer();
  alongamento =  new Datas().programaB()[3].codigos;
  ngOnInit(): void {
  }

}
