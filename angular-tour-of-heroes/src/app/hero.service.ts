import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'; //this is meant to simulate getting data from the server
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  
  constructor(private messageService: MessageService) { } //Angular will inject the singleton MessageService into that property when it 
  //creates the HeroService

  getHeroes(): Observable <Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  }
}
