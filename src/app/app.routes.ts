// src/app/app.routes.ts
import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./pages/header/header.component').then(m => m.HeaderComponent)
  },
  {
    path: 'scroll-top',
    loadComponent: () =>
      import('./pages/scroll-top/scroll-top.component').then(m => m.ScrollTopComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
