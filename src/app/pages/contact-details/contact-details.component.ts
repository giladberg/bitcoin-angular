import { Component, OnInit } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
import UserModel from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import MoveModel from 'src/app/models/move.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: ContactModel
  user:UserModel
  moves:MoveModel[]=[]
  subscriber: Subscription;
  subscriberContact: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private contactService: ContactService,
    private userService:UserService) { }

  ngOnInit(): void {
    
    this.subscriber =  this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      this.subscriberContact =  this.contactService.getContactById(id).subscribe((contact) => {
        this.contact = contact
      })
    })
    this.userService.getUser()
    this.userService.user$.subscribe((user)=>{
      if(user){
        this.user = user;
        this.moves=this.userService.getMovesById(this.contact._id)
      } 
      
      else this.router.navigate(['/signin'])
     })
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
    this. subscriberContact.unsubscribe();
 }
  sendCoin(amount){
    this.userService.addMove(this.contact,amount)
  }

}
