import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../list-page/Task'
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url : string
  dataList : Task
  currentTask : Task
  tempTask : Task
  constructor(public http:HttpClient) {
  }

  public localGet(){
    this.http.get<any>('http://10.1.4.104:8082/tasks').subscribe(data => {
    this.dataList = data})
  }

  public getAllValue(){
    return this.dataList;
  }

  public setCurrentTask(i){
    this.currentTask = i
  }

  public getCurrentTask(){
    return this.currentTask
  }

  public update(){
  const header = new HttpHeaders().append('Content-Type' , 'application/json');
  this.http.put<Task>('http://10.1.4.104:8082/tasks/' + this.currentTask.id, 
    JSON.stringify(this.currentTask),{headers:header}).subscribe(data => {
      console.log(data);
    });
  this.localGet()
  }

  public delete(){
    this.http.delete<Task>('http://10.1.4.104:8082/tasks/' + this.currentTask.id).subscribe(data => {
      console.log(data);
    });
  }

  public setTemp(){
    this.tempTask = {
      title:"",
      description:"",
      date:new Date()
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
  this.localGet()
  }
}
