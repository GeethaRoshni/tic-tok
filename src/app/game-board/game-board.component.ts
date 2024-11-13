import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent {
  @Input() gameBoard;

  updateGameBoard(rowIndex, colIndex) {
this.gameBoard[rowIndex][colIndex]='X';
  }
}
