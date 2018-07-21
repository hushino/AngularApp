import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({selector: 'app-anime', templateUrl: './anime.component.html', styleUrls: ['./anime.component.css']})
export class AnimeComponent implements OnInit {

  AnimeList = [];
  AnimeList$: Observable<DataService[]>;
  private selectedId : number;

  constructor(private dataService : DataService, private router : Router, private route : ActivatedRoute) {
    this
      .dataService
      .getDataAnimeList()
      .subscribe(data => {
        console.log(data)
        this.AnimeList = data;
      });
    // this.selectedId = +params.get('id');
    this
      .dataService
      .showAnimeById(this.selectedId)
      .subscribe(data => {
        //console.log(data)
      })

  }

  ngOnInit() {
    /* this.AnimeList$ = this
      .route
      .paramMap
      .pipe(switchMap((params : ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.dataService.showAnimeById();
      })); */
  }

  onSelect(animeList) {
    animeList.id
    // this.router.navigate(['/Show',animeList.id])
    // this.router.navigateByUrl('/Show')
  }

}
