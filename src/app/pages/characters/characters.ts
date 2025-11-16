import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCard } from '../../componentes/person-card/person-card'; // ✅ ruta correcta

interface Person {
  name: string;
  image: string;
  History: string;
}
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterCard],
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class Characters {
  Persons: Person[] = [
    {
      name: 'Scorpion',
      image: 'assets/Characters/Scorpion.jpg',
      History: 'Scorpion',
    },
    {
      name: 'Sub-Zero',
      image: 'assets/Characters/Sub-Zero.jpg',
      History: 'Scorpion',
    }
  ];
}
