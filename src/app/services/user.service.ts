import { Injectable } from '@angular/core';
import UserModel from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { UtilsService } from './utils.service';
import MoveModel from '../models/move.model';
import ContactModel from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:UserModel=null

  _user$ = new BehaviorSubject<UserModel>(null)
  user$ = this._user$.asObservable()

  constructor(private utilsService:UtilsService) { }

  getUser(){
   const user= this.utilsService.load('user')
   if(user)this.user=user
    this._user$.next(this.user)
  }
  login(userName:string){
    this.user=new UserModel(userName, 100, [])
    this._user$.next(this.user)
    this.utilsService.store('user',this.user)
  }
  logout(){
    this.user=null
    this._user$.next(this.user)
    this.utilsService.store('user',this.user)
  }
  addMove(contact:ContactModel, amount:number){
    const move = new MoveModel(contact._id,contact.name,new Date().getTime(),amount)
    this.user.moves.push(move)
    this.user.coin-=amount
    this.utilsService.store('user',this.user)
    this._user$.next(this.user)
  }
  getMovesById(contactId:string):MoveModel[]{
    return this.user.moves.filter(move=>move.toId===contactId)
  }
  getLastThreeMoves():MoveModel[]{
    return this.user.moves.slice(this.user.moves.length-3,this.user.moves.length)
  }

}
