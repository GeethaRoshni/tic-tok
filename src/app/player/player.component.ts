import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() playerName: any;
  @Input() playerSymbol: any;
  @Output() playerNameEmt = new EventEmitter();
  isEdit = false;

  editName() {
    this.isEdit = !this.isEdit;
    this.playerNameEmt.emit(this.playerName)
    
  }
}
