import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit ,OnDestroy{
  allUsers:any;
  
  constructor(private userService:UsersService){}
  
  ngOnInit(): void {
     this.userService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.allUsers = data
      });
  }
  ngOnDestroy(): void {
  
  }

}
