import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(routes => routes.HOME_ROUTES)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.routes').then(routes => routes.ACCOUNT_ROUTES)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.routes').then(routes => routes.BOOKING_ROUTES)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.routes').then(routes => routes.SERVICES_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];