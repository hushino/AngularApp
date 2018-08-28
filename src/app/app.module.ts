import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from '@angular/router'
import { DataService } from './data.service';
import { AnimeComponent } from './anime/anime.component';
import { AnimeDetailComponent }  from './anime-by-id/anime-by-id.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'animes', component: AnimeComponent},
  { path: 'showanime/:id', redirectTo: '/animeStats/:id' },
  { path: 'animeStats/:id', component: AnimeDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeComponent,
    AnimeDetailComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
