import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser'; // Usando bootstrapApplication
import { AppComponent } from './app/app.component';  // Importando AppComponent standalone
import { environment } from 'app/environments/environment.prod';

if (environment.production) {
  enableProdMode();
}

// Usando a função bootstrapApplication para inicializar a aplicação
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
