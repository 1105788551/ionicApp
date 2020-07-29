import { Component, OnInit, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service'

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {

  public editButton(i){
    this.route.navigate(['/detailpage'])
    this.api.setCurrentTask(i)
    console.log(this.api.getCurrentTask())
  }

  public deleteButton(i){
    this.api.setCurrentTask(i)
    this.api.delete()
    this.api.localGet()
    location.reload()
  }
 
  constructor(private route: Router, public api:TaskService) {
  }

  ngOnInit() {
    this.api.localGet()
  }
  
}
