import { Component, OnInit } from '@angular/core';
import {MatButton, MatButtonModule} from '@angular/material/button'
import { Datas } from '../datas';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  fichas = new Datas().fich();
  constructor() { }
  ngOnInit(): void {
  }
  
}
