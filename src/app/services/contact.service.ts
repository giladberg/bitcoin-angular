import { Injectable } from '@angular/core';
import {  Observable, BehaviorSubject,of } from 'rxjs';
//import { of } from 'rxjs/observable/of';
import Contact from '../models/contact.model';
import CONTACTS from './contact.js'


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //mock the server
  _contacts:Contact[] =CONTACTS;
  _contacts$ = new BehaviorSubject<Array<Contact>>([])
  contacts$ = this._contacts$.asObservable()

  constructor(){
  }


  public loadContacts(filterBy = null): void {
    let contacts  = this._contacts;
    if (filterBy ) {
      contacts =this._filter(contacts,filterBy)
    }
    this._contacts$.next(this._sort( contacts))
  }


  public getContactById(id: string): Observable<Contact> {
    //mock the server work
    const contact = this._contacts.find(contact => contact._id === id)

    //return an observable
    return contact ? of(contact) : Observable.throw(`Contact id ${id} not found!`)
  }

  public deleteContact(id: string) {
    //mock the server work
    this._contacts= this._contacts.filter(contact => contact._id !== id)

    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._contacts)
  }

  public saveContact(contact: Contact) {
    return contact._id ? this._updateContact(contact) : this._addContact(contact)
  }

  private _updateContact(contact: Contact) {
    //mock the server work
    this._contacts = this._contacts.map(c => contact._id === c._id ? contact : c)
    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._sort( this._contacts))
  }

  private _addContact(contact: Contact) {
    //mock the server work
    const newContact = new Contact(contact.name, contact.email, contact.phone);
    newContact.setId();
    this._contacts.push(newContact)
    this._contacts$.next(this._sort( this._contacts))
  }
  
  private _sort(arr: Contact[]): Contact[] {
    return arr.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }

  private _filter(contacts, term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
  }
}