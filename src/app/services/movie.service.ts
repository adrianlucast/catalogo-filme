import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '6c1caaa';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    const url = `${this.apiUrl}?s=${title}&apikey=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(err => {
        console.error('Erro ao buscar filmes:', err);
        return of({ Search: [] }); 
      })
    );
  }

  getMovieDetails(id: string): Observable<any> {
    const url = `${this.apiUrl}?i=${id}&apikey=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(err => {
        console.error('Erro ao buscar detalhes do filme:', err);
        return of({}); 
      })
    );
  }
}
