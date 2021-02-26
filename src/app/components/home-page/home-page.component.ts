import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GameListService} from 'src/app/services/game-list.service'
import {GameInterface} from 'src/app/interfaces/GameInterface'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  PopularGamesArray: GameInterface [];

  constructor(
    private homeGamesService: GameListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.homeGamesService.getGameDetails()
      .subscribe(data => {
      console.log(data);
      this.PopularGamesArray = data['results'];
      console.log(this.PopularGamesArray);

    },
    error => {console.log(error)});

  }

  gameInfo(game){
    this.router.navigate(['/game'], {queryParams: {slug: game.slug}})
  }

}
