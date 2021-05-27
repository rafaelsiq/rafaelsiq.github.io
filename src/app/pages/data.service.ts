import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient) { }
  getDados() {
   
    let url = "src/assets/"
    return this.http.get(url)
  }
}
