import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.page.html',
  styleUrls: ['./newpage.page.scss'],
})
export class NewpagePage implements OnInit {
  public newTitle = '新增' 
  constructor() { }

  ngOnInit() {

  }

}
