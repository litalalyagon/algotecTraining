import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // send a message after fething the heroes
    this.messageService.add('HeroService: fetched hereos');
    return of(HEROES);
  }
}
