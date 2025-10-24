import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
    title: 'Alexandre Bastos',
  },
  {
    path: 'about',
    component: AboutPage,
    title: "Alexandre Bastos: sobre"
  },
];
