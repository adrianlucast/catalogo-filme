// app.routes.ts
import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent }  // Rota inicial para o MovieListComponent
];
