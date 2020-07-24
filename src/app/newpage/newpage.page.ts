import { Component, OnInit} from '@angular/core';
import { TaskService } from '../services/task.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.page.html',
  styleUrls: ['./newpage.page.scss'],
})
export class NewpagePage implements OnInit {

  constructor(public api: TaskService,public root: Router) {

  }

  ngOnInit() {
    this.api.setTemp()
  }

  public uploadButton(){
    this.api.upload()
    this.api.setTemp()
  }

  public goBack(){
    this.api.localGet()
    this.root.navigate(['list-page/list'])
  }

}
