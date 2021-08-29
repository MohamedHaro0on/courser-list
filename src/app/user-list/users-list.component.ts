import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {  
  users$:any;

  constructor(private userService : UserService) { 
    users$ : [];
  }

  ngOnInit(): void {
    this.fetchPeople();
    console.log(this.users$);
  }
  fetchPeople(){
    this.users$ = this.userService.FetchPeople();
  }

}
