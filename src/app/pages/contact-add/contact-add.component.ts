import { Component, OnInit } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  contact: ContactModel
  constructor( private contactService: ContactService,
    private router: Router) {
    this.contact=new ContactModel("", "", "");
   }

  ngOnInit(): void {
    
  }
  saveContact(contact: ContactModel) {
    this.contactService.saveContact(contact)
    this.router.navigate(['/contact'])
  }

}
