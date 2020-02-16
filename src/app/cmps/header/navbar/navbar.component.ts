import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import UserModel from 'src/app/models/user.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: UserModel
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getUser()
    this.userService.user$.subscribe((user)=>{
     this.currentUser = user;
   })
  }
  logout(){
    this.userService.logout()
    this.router.navigate(['**'])
  }

}
