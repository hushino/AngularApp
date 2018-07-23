import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({selector: 'app-anime', templateUrl: './anime.component.html', styleUrls: ['./anime.component.css']})
export class AnimeComponent implements OnInit {

  AnimeList = [];
  AnimeList2 = [];
  
  
  private selectedId : number;
 

  constructor(private dataService : DataService,
     private activeroute : ActivatedRoute,
     private router : Router
    ) {
    this.dataService.getDataAnimeList().subscribe(data => {
        this.AnimeList = data;
      });
  }

  ngOnInit() {

    this.activeroute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        
        return this.dataService.showAnimeById(this.selectedId);
 }))};
  

  onShowAnime(id: number){
    this.dataService.showAnimeById(id).subscribe(data => {
      //this.AnimeList2 = data;
    })
    this.router.navigate(['/showanime', id])
  }

  onSelect(animeList) {
    // this.router.navigate(['/Show', animeList.id])
    // this.router.navigateByUrl('/Show')
  }

}
