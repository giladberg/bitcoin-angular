import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  marketPrice:any
  confirmTransactions:any
  constructor(private bitcoinService:BitcoinService) { }

  ngOnInit(): void {
     this.bitcoinService.getMarketPrice().subscribe((marketPrice)=>{
       this.marketPrice=marketPrice
    })
    this.bitcoinService.getConfirmedTransactions().subscribe((confirmedTransactions)=>{
      this.confirmTransactions=confirmedTransactions
    })
  }

}
