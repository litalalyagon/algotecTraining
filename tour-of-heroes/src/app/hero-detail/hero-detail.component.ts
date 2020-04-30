import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
      private route: ActivatedRoute,
      private dialog: MatDialog,
      private heroService: HeroService,
      private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      width: '400px', height: '300px',
      data: {picUrl: this.hero.avatar}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.hero.avatar = result;
      }
    });
  }


}
