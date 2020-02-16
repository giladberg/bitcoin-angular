import { Component, OnInit, Input } from '@angular/core';
import MoveModel from 'src/app/models/move.model';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() moves:MoveModel[]=[]
  @Input() title:string

  
  constructor() { }

  ngOnInit(): void {
    
  }

}
