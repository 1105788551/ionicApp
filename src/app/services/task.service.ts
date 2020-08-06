import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../list-page/Task'
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';
import { isTabSwitch } from '@ionic/angular/directives/navigation/stack-utils';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url : string
  dataList = []
  currentTask : Task
  tempTask : Task
  connetFlag : boolean
  currentPage = 0
  tempList = []
  constructor(public http:HttpClient,public net:Network,public alc:AlertController) {
   
  }

  async getData(){
    try{
      let data = await this.localGet()
      let j = 0
      for(let i of data){
        this.dataList[j] = i
        j++
      }
      console.log(this.dataList);
      console.log('getData 执行完成, 数据成功抓取');
      this.connetFlag = true;
    }
    catch(err){
      console.log("数据抓取失败")
      this.connetFlag = false;
      this.reConnet()
    }
    
  }



  public localGet(){
    let data = this.http.get<any>('http://10.1.4.104:8082/tasks').toPromise()
      console.log(data)
      console.log('localGet 执行完成, promise 已经返回');
      return data
  }

  public getAllValue(){
    return this.dataList
  }

  public setCurrentTask(i){
    this.currentTask = i
  }

  public getCurrentTask(){
    return this.currentTask
  }

  public getFlag(temp){
  }

  public update(){
  const header = new HttpHeaders().append('Content-Type' , 'application/json');
  this.http.put<Task>('http://10.1.4.104:8082/tasks/' + this.currentTask.id, 
    JSON.stringify(this.currentTask),{headers:header}).subscribe(data => {
      console.log(data);
      this.getData()
    });
  }

  public delete(){
    this.http.delete<Task>('http://10.1.4.104:8082/tasks/' + this.currentTask.id).subscribe(data => {
      console.log(data);
      this.getData()
    });
  }

  public setTemp(){
    this.tempTask = {
      title:"",
      description:"",
      date:new Date(1800/1/1)
    }
  }

  public getTemp(){
    return this.tempTask
  }
    
  public upload(){
  const header = new HttpHeaders().append('Content-Type' , 'application/json');
  this.http.post<Task>('http://10.1.4.104:8082/tasks', 
    JSON.stringify(this.tempTask),{headers:header}).subscribe(data => {
      console.log(data);
    });
  this.getData()
  }

  public emptyTitle(){
    if(this.tempTask.title == ""){
      return true;
    }
    return false;
  }

  public emptyDate(){
    if(this.tempTask.date.toString === new Date(1800/1/1).toString){
      return true;
    }
    return false;
  }

  public emptyContent(){
    if(this.tempTask.description == ""){
      return true;
    }
    return false;
  }

  async reConnet() {
    const alter = await this.alc.create({
      header: '警告,你现在与服务器断线',
      message: '是否重新连接',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: '确定',
          handler: () => {
            this.getData()
          }
        }
      ]
    });
    await alter.present()
  }

}
