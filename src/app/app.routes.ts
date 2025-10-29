import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Games } from './games/games';
import { Movies } from './movies/movies';
import { History } from './history/history';
import { Characters } from './characters/characters';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'games', component: Games },
  { path: 'movies', component: Movies },
  { path: 'history', component: History },
  { path: 'characters', component: Characters },
  { path: '**', redirectTo: '' } // redirección por defecto
];
