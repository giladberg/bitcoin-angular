import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import UserModel from 'src/app/models/user.model';


@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact:ContactModel
  @Input() user:UserModel
  @Output() sendCoin = new EventEmitter<number>();
  amount:number
  constructor() { }

  ngOnInit(): void {
  }
  onSendCoin(){
    this.sendCoin.emit(this.amount);
    this.amount=1
  }
  
}
