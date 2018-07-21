import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from '@angular/router'
import { DataService } from './data.service';
import { AnimeComponent } from './anime/anime.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'animes', component: AnimeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
