import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: ( () => 
      import ('./pages/pages.routes').then((r)=> r.routes)
    )
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }
];
