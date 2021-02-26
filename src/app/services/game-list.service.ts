import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  // Base URL
  baseUrl: string = 'https://api.rawg.io/api/'

  constructor(
    private http: HttpClient
  ) { }

  getGameDetails() {
    let endpoint = `${this.baseUrl}games`;
    console.log(endpoint);

    return this.http.get(endpoint);
  }

  getSingleGameDetails(slug) {
    let endpoint = `${this.baseUrl}games/${slug}`;
    console.log(endpoint);

    return this.http.get(endpoint);
  }
}
