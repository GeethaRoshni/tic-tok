import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  playersArray = [
    {name: 'Player 1', symbol: 'X'},
    {name: 'Player 2', symbol: 'O'}
  ]

  constructor() { }
}
