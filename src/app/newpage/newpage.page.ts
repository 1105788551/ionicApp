import { Component, OnInit} from '@angular/core';
import { TaskService } from '../services/task.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.page.html',
  styleUrls: ['./newpage.page.scss'],
})
export class NewpagePage implements OnInit {
  dateTemp = new Date(1800/1/1)
  constructor(public api: TaskService,public root: Router,public alc:AlertController) {

  }

  ngOnInit() {
    this.api.setTemp()
  }

  async uploadButton(){
      this.api.upload()
      this.api.setTemp()
  }

  public goBack(){
    this.api.emptyTitle()
    this.api.localGet()
    this.root.navigate(['list-page/list'])
  }


}
