import { Routes } from '@angular/router';
import { SECTIONS_AND_URLS } from '@/app/core/consts/urls.consts';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: `${SECTIONS_AND_URLS[0].url}`,
    pathMatch: 'full',
  },
  {
    path: ':section',
    component: HomeComponent,
  },
];
