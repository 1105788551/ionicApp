import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListPagePage } from './list-page/list-page.page'

const routes: Routes = [
  {
    path: '',
    component:ListPagePage
  },
  {
    path: 'newpage/new',
    loadChildren: () => import('./newpage/newpage.module').then( m => m.NewpagePageModule)
  },
  {
    path: 'list-page/list',
    loadChildren: () => import('./list-page/list-page.module').then( m => m.ListPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
