import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.page.html',
  styleUrls: ['./detailpage.page.scss'],
})
export class DetailpagePage implements OnInit {

  constructor(public api:TaskService, public root: Router) {

  }

  public cancelButton(){
    this.api.localGet()
    this.root.navigate(['list-page/list'])
  }

  public updateButton(){
    this.api.update()
    this.root.navigate(['list-page/list'])
    this.api.localGet()
  }

  ngOnInit() {
    this.api.localGet()
  }

}
