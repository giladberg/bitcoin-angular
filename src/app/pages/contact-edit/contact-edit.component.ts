import { Component, OnInit } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: ContactModel
  subscriber: Subscription;
  subscriberContact: Subscription;
  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscriber = this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      this.subscriberContact = this.contactService.getContactById(id).subscribe((contact) => {
        this.contact = contact
      })
    })
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
    this.subscriberContact.unsubscribe();
  }
  saveContact(contact: ContactModel) {
    this.contactService.saveContact(contact)
    this.router.navigate(['/contact'])
  }
  deleteContact() {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['/contact'])
  }

}
