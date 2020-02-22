import { UsersService } from './services/users.service';
import { Autor } from './model/autor';
import { AutorsService } from './services/autors.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  likes: number = 0;
  users: any = [];

  constructor(private autorsService: AutorsService, private usersService: UsersService){}

  likeClick() {
    this.likes++;
  }

  get authors() : Autor[] {
    return this.autorsService.getAutors();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe( resp => this.users = resp );
  }
  
}
