import { Component, OnInit, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {

  connet = true
  pageSize = 5
  tempList = []
  currentPage = 0

  public itemNumberChoser(){
    console.log(this.pageSize)
    let item = this.getItem()
    while(item > this.api.dataList.length){
      this.currentPage--
      item = this.getItem()
      console.log(item)
    }
    this.getLocalData()
  }

  public getItem(){
    return this.currentPage * this.pageSize
  }

  public nextPage(){
    this.currentPage++;
    let item = this.getItem()
    if(item >= this.api.dataList.length){
      this.currentPage--;
    }
    console.log(this.getItem())
    this.getLocalData()
  }

  public prevPage(){
    this.currentPage--;
    if(this.currentPage < 0){
      this.currentPage++;
    }
    this.getLocalData()
  }

  public getLocalData(){
    this.tempList = []
    let tempPage = this.getItem()
    for(let i = 0; i < this.pageSize; i++){
      if(this.api.dataList[i + tempPage] != null){
        this.tempList[i] = this.api.dataList[i + tempPage]
      }
    }
    console.log("list页面完成")
  }

  public editButton(i){
    this.api.getData().then(()=>{
      if(this.api.connetFlag){
        this.route.navigate(['/detailpage'])
        this.api.setCurrentTask(i)
        console.log(this.api.getCurrentTask())
      }
    })
  }

  async delete(index) {
    const alter = await this.alc.create({
      header: '警告',
      message: '是否删除当前文件',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: '确定',
          handler: () => {
            this.deleteFunction(index)
          }
        }
      ]
    });
    await alter.present()
  }

  public deleteFunction(i){
    this.api.setCurrentTask(i)
    this.api.localDelete().then(()=>{
      this.api.getData().then(()=>{
        if(this.api.connetFlag){
          this.getLocalData()
        }
      })  
    })  
  }
 
  constructor(private route: Router, public api:TaskService,public alc:AlertController, ) {
  }

  ngOnInit() {
    this.connet = false
    this.api.getData().then(()=>{
      if(this.api.connetFlag){
        this.getLocalData()
        console.log("还在运行")
      }
    })
  }
  ngAfterContentInit(){
    if(this.connet){
      this.api.getData().then(()=>{
        if(!this.api.connetFlag){
          
        }
      })
    }
  }
}
