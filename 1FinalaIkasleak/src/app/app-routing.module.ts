import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liburutegia',
    pathMatch: 'full'
  },
  {
    path: 'liburutegia',
    loadChildren: () => import('./liburutegia/liburutegia.module').then( m => m.LiburutegiaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
