import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() contact:ContactModel
  @Output() saveContact = new EventEmitter<ContactModel>();
  editableContactName: string;
  constructor() { }

  ngOnInit(): void {
  }
  onSaveContact(){
    this.saveContact.emit(this.contact);
  }

}
