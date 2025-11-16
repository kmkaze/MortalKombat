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
      History: 'Ninja espectral en busca de venganza por la muerte de su clan; famoso por su grito "¡Get over here!"',
    },
    {
      name: 'Sub-Zero',
      image: 'assets/Characters/Sub-Zero.jpg',
      History: 'Guerrero del clan Lin Kuei con poderes de hielo; existen dos: Bi-Han (original) y Kuai Liang (hermano menor)',
    },
    {
      name: 'Liu Kang',
      image: 'assets/Characters/LiuKang.jpg',
      History: 'Monje shaolin y campeón del torneo Mortal Kombat; defensor del Earthrealm',
    },
    {
      name: 'Raiden',
      image: 'assets/Characters/Raiden.jpg',
      History: 'Dios del Trueno y protector del Earthrealm; guía a los héroes contra las fuerzas del mal',
    }
  ];
}
