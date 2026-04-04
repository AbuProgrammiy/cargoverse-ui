import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { MainLayout } from './layout/main-layout/main-layout';
import { Admin } from './features/admin/admin';
import { AdminLogin } from './features/admin/components/admin-login/admin-login';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: 'admin/login',
    component: AdminLogin,
  },
];
