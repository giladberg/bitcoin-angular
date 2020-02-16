import { Component, OnInit, Input } from '@angular/core';
import MoveModel from 'src/app/models/move.model';

@Component({
  selector: 'app-move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent implements OnInit {
  @Input() move:MoveModel
  constructor() { }

  ngOnInit(): void {
  }

}
