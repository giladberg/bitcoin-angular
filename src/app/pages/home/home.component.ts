import { Component, OnInit } from '@angular/core';
import UserModel from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Subscription } from 'rxjs';
import MoveModel from 'src/app/models/move.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: UserModel
  bitcoinRate:number=0
  moves:MoveModel[]=[]
  subscriber: Subscription;
  subscriberCoin: Subscription;
  constructor(private userService: UserService,private bitcoinService:BitcoinService) { }

  ngOnInit(): void {
     this.userService.getUser()
     this.subscriber =  this.userService.user$.subscribe((user)=>{
    if(user){
      this.currentUser = user;
      this.moves=this.userService.getLastThreeMoves()
    } 
    else this.currentUser =new UserModel('Guest',100,[])
   })
   this.subscriberCoin=   this.bitcoinService.getRate(this.currentUser.coin)
    .subscribe(rate=>this.bitcoinRate=rate)
  }

  ngOnDestroy(): void {
     this.subscriber.unsubscribe();
     this.subscriberCoin.unsubscribe();
  }

}
