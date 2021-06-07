import { Component, OnInit } from '@angular/core';
import { Datas } from '../pages/datas';

@Component({
  selector: 'app-exerciciobcard',
  templateUrl: './exerciciobcard.component.html',
  styleUrls: ['./exerciciobcard.component.css']
})
export class ExerciciobcardComponent implements OnInit {
  imagem = "../../../assets/exercicios/"
  imagemFim = ".gif"
  exercicios = new Datas().exer();
  cardio = new Datas().programaB()[2].dia;

  today = '';
  treinocardio = this.setTreinoCardio()

  constructor() {
    this.setToday()
    this.treinocardio =  this.setTreinoCardio()
    
  }

  ngOnInit(): void {
    this.setToday()
    this. treinocardio = this.setTreinoCardio()
    console.log(this.today)
    console.log(this.treinocardio)
    
    
  }
  setToday() {
    this.cardio = new Datas().programaA()[2].dia;
    var dia = new Date().getDay();
    var semana = new Array(6);
    semana[0] = 'domingo';
    semana[1] = 'segunda';
    semana[2] = 'terça';
    semana[3] = 'quarta';
    semana[4] = 'quinta';
    semana[5] = 'sexta';
    semana[6] = 'sabado';
    this.today = semana[dia];
  }

  setTreinoCardio() {
    this.setToday()
    if (this.today == 'domingo') { return new Datas().domingo[0] }
    else if (this.today == 'segunda') { return new Datas().segunda[Math.floor((Math.random() * 3) + 0)] }
    else if (this.today == 'terça') { return new Datas().terca[Math.floor((Math.random() * 3) + 0)] }
    else if (this.today == 'quarta') { return new Datas().quarta[Math.floor((Math.random() * 3) + 0)] }
    else if (this.today == 'quinta') { return new Datas().quinta[Math.floor((Math.random() * 3) + 0)] }
    else if (this.today == 'sexta') { return new Datas().sexta[Math.floor((Math.random() * 3) + 0)] }
    else if (this.today == 'sabado') { return new Datas().sabado[Math.floor((Math.random() * 3) + 0)] }
    else return "naao"
  }
}
