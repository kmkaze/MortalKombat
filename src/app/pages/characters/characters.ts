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
    },
    {
      name: 'Johnny Cage',
      image: 'assets/Characters/JohnnyCage.jpg',
      History: 'Actor de Hollywood convertido en luchador; combina carisma con habilidades marciales',
    },
    {
      name: 'Sonya Blade',
      image: 'assets/Characters/SonyaBlade.jpg',
      History: 'Oficial de las Fuerzas Especiales; valiente y determinada, experta en combate cuerpo a cuerpo',
    },
    {
      name: 'Jax Briggs',
      image: 'assets/Characters/JaxBriggs.webp',
      History: 'Oficial de las Fuerzas Especiales; valiente y determinada, experta en combate cuerpo a cuerpo',
    },
    {
      name: 'Kitana',
      image: 'assets/Characters/Kitana.jpg',
      History: 'Princesa de Edenia; lucha contra el emperador Shao Kahn usando abanicos afilados',
    },
    {
      name: 'Mileena',
      image: 'assets/Characters/Mileena.png',
      History: 'Clon de Kitana con rasgos tarkatanos; violenta y letal, con una sonrisa mortal',
    },
    {
      name: 'Shang Tsung',
      image: 'assets/Characters/ShangTsung.jpg',
      History: 'Hechicero que roba almas; cambia de forma y sirve a Shao Kahn',
    },
    {
      name: 'Shao Kahn',
      image: 'assets/Characters/ShaoKahn.webp',
      History: 'Emperador de Outworld; brutal, arrogante y con fuerza sobrehumana',
    },
    {
      name: 'Reptile',
      image: 'assets/Characters/Reptile.jpeg',
      History: 'Guerrero sauriano con habilidades de invisibilidad y ácido',
    },
    {
      name: 'Baraka',
      image: 'assets/Characters/Baraka.webp',
      History: 'Guerrero tarkatano con cuchillas en los brazos; feroz y leal a Outworld',
    },
    {
      name: 'Noob Saibot',
      image: 'assets/Characters/NoobSaibot.jpeg',
      History: 'La forma resucitada de Bi-Han (primer Sub-Zero); maestro de las sombras',
    },
    {
      name: 'Kung Lao',
      image: 'assets/Characters/KungLao.jpg',
      History: 'Monje shaolin con sombrero afilado como arma; amigo cercano de Liu Kan',
    },
    {
      name: 'Sindel',
      image: 'assets/Characters/Sindel.jpg',
      History: 'Reina de Edenia; poderosa con gritos sónicos y habilidades mágicas',
    },
    {
      name: 'Ermac',
      image: 'assets/Characters/Ermac.webp',
      History: 'Fusión de almas controladas por magia; experto en telequinesis',
    },
    {
      name: 'Smoke',
      image: 'assets/Characters/Smoke.jpg',
      History: 'Fusión de almas controladas por magia; experto en telequinesis',
    },
    {
      name: 'Cyrax',
      image: 'assets/Characters/Cyrax.jpg',
      History: 'Ninja cibernético del Lin Kuei; lucha por recuperar su humanidad',
    },
    {
      name: 'Sektor',
      image: 'assets/Characters/Sektor.jpg',
      History: 'Cyborg despiadado del Lin Kuei; leal a la automatización total del clan',
    },
    {
      name: 'Kano',
      image: 'assets/Characters/Kano.jpg',
      History: 'Criminal y líder del Dragón Negro; experto en armas y tecnología',
    },
    {
      name: 'Cassie Cage',
      image: 'assets/Characters/CassieCage.jpg',
      History: 'Hija de Johnny Cage y Sonya Blade; combina lo mejor de ambos padres',
    },
    {
      name: 'D-Vorah',
      image: 'assets/Characters/D-Vorah.webp',
      History: 'Criatura insectoide del reino Arnyek; aliada de los villanos',
    },
    {
      name: 'Kotal Kahn',
      image: 'assets/Characters/KotalKahn.jpg',
      History: 'Guerrero azteca y emperador de Outworld; honorable pero implacable',
    },
    {
      name: 'Geras',
      image: 'assets/Characters/Geras.jpg',
      History: 'Guerrero inmortal que manipula el tiempo; sirviente de Kronika',
    },
    {
      name: 'Cetrion',
      image: 'assets/Characters/Cetrion.jpg',
      History: 'Guerrero inmortal que manipula el tiempo; sirviente de Kronika',
    }
    
    
  ];
}
