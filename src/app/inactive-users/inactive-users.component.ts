import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service'; /* TS feature */

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {

  }

  ngOnInit(){
    this.users = this.userService.inactiveUsers; // get inactive users list
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);

  }
}
