import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {

  constructor(private _httpClient: HttpClient) {}

  results: any = [];
  poster:any=[];
  getMovies(title) {
    this._httpClient.get("https://www.omdbapi.com/?apikey=fb5a864e&s=" + title)
      .subscribe((data: any) => {
        this.results = data.Search;
        console.log(this.results);
      })
  }
 

  ngOnInit() {
    
  }

}