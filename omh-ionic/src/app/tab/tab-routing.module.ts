import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '', loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule),
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '', loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule),
          }
        ]
      },
      {
        path: 'signup',
        children: [
          {
            path: '', loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule),
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tab/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}

