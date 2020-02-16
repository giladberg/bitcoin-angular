import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-statistic-preview',
  templateUrl: './statistic-preview.component.html',
  styleUrls: ['./statistic-preview.component.scss']
})
export class StatisticPreviewComponent implements OnInit {
  @Input() data:any
   myOptions:any = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true
  };
  constructor() {
    
   }

  ngOnInit(): void {
  }
  ngOnChanges(){
    if(this.data)
    this.data.data=this.data.values.map((value,i)=>[i,value.y])

  }
  

}
