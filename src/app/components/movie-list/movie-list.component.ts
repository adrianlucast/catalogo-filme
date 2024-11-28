import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { RouterModule } from '@angular/router';  
import { FormsModule } from '@angular/forms';   
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-movie-list',
  standalone: true,  
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  imports: [RouterModule, FormsModule, CommonModule]  
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  searchQuery: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe(data => {
        this.movies = data['Search'] || [];
      });
    }
  }

  addToFavorites(movie: any): void {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
