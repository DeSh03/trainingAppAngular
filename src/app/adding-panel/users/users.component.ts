import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.userList = data);
  }
}
