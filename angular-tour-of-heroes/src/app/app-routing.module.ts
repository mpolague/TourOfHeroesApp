import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; //this is imported so that the app can have routing functionality
//routes tell the router which view to display when the user clicks on a link or pastes a URL into the browser address bar
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent}, //route to the AppRoutingModule.routes array that matches a path to the DashboardComponent
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: HeroDetailComponent}, //the ':' indicates that :id is a placeholder for a specific hero id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //adds RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot()
  exports: [RouterModule]
})

export class AppRoutingModule { }
exports: [ RouterModule]

