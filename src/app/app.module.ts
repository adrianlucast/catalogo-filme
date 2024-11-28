import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Importação do AppComponent standalone (não é necessário declarar no módulo)
import { MovieListComponent } from './components/movie-list/movie-list.component'; // Componente standalone

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // Não precisa declarar AppComponent aqui, pois ele é standalone
    MovieListComponent  // Apenas importe o MovieListComponent
  ],
})
export class AppModule { }
