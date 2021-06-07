import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FichaComponent } from './pages/ficha/ficha.component';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { FichaContentsComponent } from './pages/ficha-contents/ficha-contents.component';
import { HeaderAcademiaComponent } from './pages/header-academia/header-academia.component';
import {HttpClientModule} from "@angular/common/http";
import { ExercicioamuscComponent } from './exercicioamusc/exercicioamusc.component';
import { ExercicioacardComponent } from './exercicioacard/exercicioacard.component';
import { ExerciciobcardComponent } from './exerciciobcard/exerciciobcard.component';
import { ExerciciobalongComponent } from './exerciciobalong/exerciciobalong.component';
import { ExercicioaalongComponent } from './exercicioaalong/exercicioaalong.component';
import { ExercicioaprepComponent } from './exercicioaprep/exercicioaprep.component';
import { ExerciciobprepComponent } from './exerciciobprep/exerciciobprep.component';
import { ExerciciobmuscComponent } from './exerciciobmusc/exerciciobmusc.component';
import { FichbContentsComponent } from './pages/fichb-contents/fichb-contents.component'

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    HomeComponent,
    FichaContentsComponent,
    HeaderAcademiaComponent,
    ExercicioamuscComponent,
    ExercicioacardComponent,
    ExerciciobcardComponent,
    ExerciciobalongComponent,
    ExercicioaalongComponent,
    ExercicioaprepComponent,
    ExerciciobprepComponent,
    ExerciciobmuscComponent,
    FichbContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
