import { Component, OnInit } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts:ContactModel[]=[]
  subscriber: Subscription;
  constructor(private contactService:ContactService,private router: Router) { }
  ngOnInit(): void {
    this.contactService.loadContacts(null);
    this.subscriber =   this.contactService.contacts$.subscribe((contacts)=>{
       this.contacts = contacts;
    })
  }
  addNewContact(){
    this.router.navigate(['/add'])
  }
  onFilter(filterBy){
    this.contactService.loadContacts(filterBy);
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
   
  }
}
