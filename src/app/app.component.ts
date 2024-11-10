import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { GameService } from './services/game.service';
import { GameBoardComponent } from './game-board/game-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PlayerComponent, GameBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tiktokGame';
  playerList;


  constructor(private gameService: GameService) {
    this.playerList = gameService.playersArray;
  }

  updatePalyerName(event, index) {
  
    // name is in event
    // update latest name in this.playerList

    // const findPlayerIndex = this.playerList.findIndex(val => val.id === id); this for id use
    this.playerList[index].name = event;
    // this.gameService.playersArray = this.playerList

  }
}
