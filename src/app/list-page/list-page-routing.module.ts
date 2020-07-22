import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPagePage } from './list-page.page';

const routes: Routes = [
  {
    path: '',
    component: ListPagePage
  },
  {
    path: 'newpage/new',
    loadChildren: () => import('../newpage/newpage.module').then( m => m.NewpagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPagePageRoutingModule {}
