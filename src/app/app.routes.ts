import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { MainLayout } from './layout/main-layout/main-layout';
import { AdminPanel } from './features/admin-panel/admin-panel';
import { AdminLogin } from './features/admin-login/admin-login';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'admin-panel',
        component: AdminPanel,
      },
      {
        path: 'admin-login',
        component: AdminLogin,
      },
    ],
  },
];
