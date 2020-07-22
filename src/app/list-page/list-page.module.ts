import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListPagePageRoutingModule } from './list-page-routing.module';
import { ListPagePage } from './list-page.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPagePageRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
  ],
  declarations: [ListPagePage]
})
export class ListPagePageModule {}
