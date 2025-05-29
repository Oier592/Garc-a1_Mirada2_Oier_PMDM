import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiburutegiaPage } from './liburutegia.page';

const routes: Routes = [
  {
    path: '',
    component: LiburutegiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiburutegiaPageRoutingModule {}
