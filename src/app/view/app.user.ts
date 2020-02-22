import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './app.user.html',
  styleUrls: ['./app.user.scss']
})
export class AppUser {

  @Input()
  user: any;
  
}
