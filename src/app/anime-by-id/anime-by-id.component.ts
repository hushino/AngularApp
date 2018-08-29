import { switchMap } from 'rxjs/operators';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService,Anime} from '../data.service';


@Component({
    templateUrl:'./anime-by-id.component.html'
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
  