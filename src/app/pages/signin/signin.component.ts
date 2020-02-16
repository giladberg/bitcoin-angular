import { Component, OnInit } from '@angular/core';
import UserModel from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  newUser: UserModel
  userName: string
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSaveUser() {
    this.userService.login(this.userName)
    this.router.navigate(['**'])
  }
}
