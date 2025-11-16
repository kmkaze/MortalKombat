import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-card.html',
  styleUrls: ['./person-card.css']
})

export class CharacterCard {
  @Input() person!: {
    name: string;
    image: string;
    History: string;
  };

}
