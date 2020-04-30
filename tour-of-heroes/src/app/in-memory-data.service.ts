import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { images } from '../assets/hero-images.mock';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  avatarPlaceholder = 'https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg';

  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', avatar: this.avatarPlaceholder },
      { id: 12, name: 'Narco', avatar: this.avatarPlaceholder },
      { id: 13, name: 'Bombasto', avatar: this.avatarPlaceholder },
      { id: 14, name: 'Celeritas', avatar: this.avatarPlaceholder },
      { id: 15, name: 'Magneta', avatar: this.avatarPlaceholder },
      { id: 16, name: 'RubberMan', avatar: this.avatarPlaceholder },
      { id: 17, name: 'Dynama', avatar: this.avatarPlaceholder },
      { id: 18, name: 'Dr IQ', avatar: this.avatarPlaceholder },
      { id: 19, name: 'Magma', avatar: this.avatarPlaceholder },
      { id: 20, name: 'Tornado', avatar: this.avatarPlaceholder }
    ];

    return {
      heroes,
      images
    };
  }

  // id for new hero
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
