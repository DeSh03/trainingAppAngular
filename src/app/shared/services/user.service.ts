import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: [User];

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('assets/user-data.json');
  }

}
