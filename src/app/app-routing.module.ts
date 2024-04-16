import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AllmoviesComponent } from './allmovies/allmovies.component';
import { ViewcardComponent } from './viewcard/viewcard.component';
import { BooknowComponent } from './booknow/booknow.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'allmovies',component:AllmoviesComponent},
  {path:'viewcard/:id',component:ViewcardComponent},
  {path:'booknow',component:BooknowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
