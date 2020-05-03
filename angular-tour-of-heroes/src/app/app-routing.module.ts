import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; //this is imported so that the app can have routing functionality
//routes tell the router which view to display when the user clicks on a link or pastes a URL into the browser address bar


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
