import { Component, OnInit,Input } from '@angular/core';
import ContactModel from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
@Input() contact:ContactModel
  constructor() { }

  ngOnInit(): void {
  }

}
