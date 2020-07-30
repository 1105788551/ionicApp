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

  public editButton(i){
    this.route.navigate(['/detailpage'])
    this.api.setCurrentTask(i)
    console.log(this.api.getCurrentTask())
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
    this.api.delete()
    this.api.localGet()
    location.reload()
  }
 
  constructor(private route: Router, public api:TaskService,public alc:AlertController) {
  }

  ngOnInit() {
    this.api.localGet()
  }
  
}
