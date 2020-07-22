import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiserver } from './apiserver'
import { Task } from './Task';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {
  public listTitle = '列表'
  dataList : Task

  public editButton(){
    this.route.navigate(['/newpage/new'])
  }
 
  constructor(private route: Router,public http: HttpClient,public api:apiserver) {
    this.dataList = api.getAllValue();
  }
  ngOnInit() {
    
  }

}
