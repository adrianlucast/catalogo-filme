import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class FavoritesComponent {
  favorites = [
    {
      Title: 'Filme Exemplo',
      Year: '2023',
      Poster: 'https://via.placeholder.com/150',
    },
  ];
}
