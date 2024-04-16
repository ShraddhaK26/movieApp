import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewcardComponent } from './viewcard/viewcard.component';
import { BooknowComponent } from './booknow/booknow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AllmoviesComponent,
    ViewcardComponent,
    BooknowComponent,
    SearchPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
