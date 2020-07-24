import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list-page/list-page.module').then( m => m.ListPagePageModule)
  },
  {
    path: 'newpage/new',
    loadChildren: () => import('./newpage/newpage.module').then( m => m.NewpagePageModule)
  },
  {
    path: 'list-page/list',
    loadChildren: () => import('./list-page/list-page.module').then( m => m.ListPagePageModule)
  },
  {
    path: 'detailpage',
    loadChildren: () => import('./detailpage/detailpage.module').then( m => m.DetailpagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
