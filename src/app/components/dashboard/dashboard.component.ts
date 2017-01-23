import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Livingroom } from '../../models/livingroom/livingroom.model';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  livingroomdata: Livingroom[];

  constructor(
     private apiService: ApiService,
  ) { }

  getLivingroom(): void {
    this.apiService
        .getLivingroom()
        .subscribe(livingroomdata => this.livingroomdata = livingroomdata);
  }

  click() {
    return console.log(this.livingroomdata);
  }

  ngOnInit() {
    this.getLivingroom();
  }

}
