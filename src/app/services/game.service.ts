import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  playersArray = [
    {id: 1, name: 'Player 1', symbol: 'X'},
    {id: 2, name: 'Player 2', symbol: 'O'}
  ]

  constructor() { }
}
