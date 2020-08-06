import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.page.html',
  styleUrls: ['./detailpage.page.scss'],
})
export class DetailpagePage implements OnInit {

  connetFlag = true

  constructor(public api:TaskService, public root: Router,public alc:AlertController) {

  }

  public cancelButton(){
    this.api.getData().then(()=>{
      if(this.api.connetFlag){
        this.root.navigate(['list-page/list'])
      }
    })  
  }

  public updateButton(){
    this.api.getData().then(()=>{
      if(this.api.connetFlag){
        this.api.update()
        this.root.navigate(['list-page/list'])
      }
    })  
  }
  
  ngOnInit() {
    this.api.getData()
  }

}
