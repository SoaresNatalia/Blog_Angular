import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'conteudo/:id',
    component: ConteudoComponent
  }
];
