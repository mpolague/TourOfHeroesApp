import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'; //this is meant to simulate getting data from the server

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  getHeroes(): Observable <Hero[]> {
    return of(HEROES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  }

  constructor() { }
}
