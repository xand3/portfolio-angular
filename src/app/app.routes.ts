import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { ResumePage } from './pages/resume-page/resume-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';

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
  {
    path: 'resume',
    component: ResumePage,
    title: "Alexandre Bastos: pesume"
  },
  {
    path: 'projects',
    component: ProjectsPage,
    title: "Alexandre Bastos: projects"
  },
  {
    path: 'contact',
    component: ContactPage,
    title: "Alexandre Bastos: contact"
  }
];
