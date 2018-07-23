import { switchMap } from 'rxjs/operators';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService,Anime} from '../data.service';


@Component({
    template: `
    <h2>Anime info</h2>
    <div *ngIf="anime | async as animes">
      <h3>"{{ animes.title }}"</h3>
      <div>
        <label>Id: </label>{{ animes.id }}</div>
      
    </div>
    `,
  })
  export class AnimeDetailComponent implements OnInit {
     
    anime: Observable<Anime>;
  
    constructor(
      private route: ActivatedRoute,
      private service: DataService
    ) {}
  
    ngOnInit() {
       this.anime = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.service.getAnime(params.get('id')))
      );
      
    }
  }
  