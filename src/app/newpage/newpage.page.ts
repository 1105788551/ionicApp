import { Component, OnInit } from '@angular/core';
import { Task } from '../list-page/Task'

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.page.html',
  styleUrls: ['./newpage.page.scss'],
})
export class NewpagePage implements OnInit {

  newTempData : Task

  constructor() { }

  ngOnInit() {
    
  }

}
