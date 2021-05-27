import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FichaComponent } from './pages/ficha/ficha.component';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { TreinosComponent } from './pages/treinos/treinos.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { FichaContentsComponent } from './pages/ficha-contents/ficha-contents.component';
import { HeaderAcademiaComponent } from './pages/header-academia/header-academia.component';
import { DataService } from './pages/data.service';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    HomeComponent,
    ExerciciosComponent,
    TreinosComponent,
    FichaContentsComponent,
    HeaderAcademiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,MatBadgeModule,MatTabsModule,MatIconModule,HttpClientModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
