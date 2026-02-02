import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/landing/home/home.component').then((c) => c.HomeComponent),
  }  
]; 
