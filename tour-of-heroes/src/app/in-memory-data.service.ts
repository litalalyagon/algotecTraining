import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { images } from '../assets/hero-images.mock';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const avatarPlaceholder = 'https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg';

    const heroes = [
      { id: 11, name: 'Dr Nice', avatar: avatarPlaceholder },
      { id: 12, name: 'Narco', avatar: avatarPlaceholder },
      { id: 13, name: 'Bombasto', avatar: avatarPlaceholder },
      { id: 14, name: 'Celeritas', avatar: avatarPlaceholder },
      { id: 15, name: 'Magneta', avatar: avatarPlaceholder },
      { id: 16, name: 'RubberMan', avatar: avatarPlaceholder },
      { id: 17, name: 'Dynama', avatar: avatarPlaceholder },
      { id: 18, name: 'Dr IQ', avatar: avatarPlaceholder },
      { id: 19, name: 'Magma', avatar: avatarPlaceholder },
      { id: 20, name: 'Tornado', avatar: avatarPlaceholder }
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
