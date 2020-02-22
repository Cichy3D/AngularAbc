import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:8081/users';

  constructor(private http: HttpClient) { }

  getUsers() : Observable<any> {
    return this.http.get(this.url);
  }

}
