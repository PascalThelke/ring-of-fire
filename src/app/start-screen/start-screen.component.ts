import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule, GameComponent, RouterModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent {

  constructor(private router:Router){}
  newGame() {
    this.router.navigateByUrl('/game');
  }
}
