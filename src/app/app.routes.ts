import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Games } from './pages/games/games';
import { Movies } from './pages/movies/movies';
import { History } from './pages/history/history';
import { Characters } from './pages/characters/characters';
import { Form } from './pages/form/form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'games', component: Games },
  { path: 'movies', component: Movies },
  { path: 'history', component: History },
  { path: 'characters', component: Characters },
  { path: 'form', component: Form },
  { path: '**', redirectTo: '' } // redirección por defecto
];
