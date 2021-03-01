import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GameListService} from 'src/app/services/game-list.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private GamesService: GameListService,
    ) { }

  showBox : boolean = false;
  searchText: string = '';
  PopularGamesArray: any [];
  index: Number = 5;
  Box = document.getElementById("box");
  ngOnInit(): void {
  }

  closeDropdown(boolean){
    if (boolean == false) {
      this.showBox = false;
    }
  }

  Search(event : String){
    console.log(event);
    if (event.length == 0) {
      this.showBox = false;
    }else{
      this.showBox = true;
      this.GamesService.getSearchResults(event)
      .subscribe(data => {
        console.log(data);
        this.PopularGamesArray = data['results'];
        console.log(this.PopularGamesArray);
      },
      error => {console.log(error)});
    }
  }

  gameInfo(game){
    this.showBox = false;
    this.router.navigate(['/game'], {queryParams: {slug: game.slug}});
  }
}
