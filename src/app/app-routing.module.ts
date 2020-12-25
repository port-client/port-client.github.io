import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'ui-components',
    loadChildren: () => import('./ui-component/ui-component.module').then(m => m.UiComponentModule),
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
