import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable()
export class apiserver{
    url : string
    dataList : Task
    
    constructor(public http: HttpClient) {
        this.http = http
        this.url = 'http://10.1.4.104:8082/tasks'
    }

    public getAllValue(){
        this.http.get<Task>('http://10.1.4.104:8082/tasks').subscribe(data => {
        this.dataList = data})
        return this.dataList;
    }

}
