import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {GameListService} from 'src/app/services/game-list.service'
import {GameInfo} from 'src/app/interfaces/GameInfo';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {

  constructor(
    private GamesService: GameListService,
    private router: Router,
    public activatedRoute: ActivatedRoute
    ) { }
    gameInfo: GameInfo;
  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params =>{
      console.log(params);

    this.GamesService.getSingleGameDetails(params.slug)
      .subscribe((data:GameInfo) => {
        this.gameInfo = data;
      });
    });
  }

}
