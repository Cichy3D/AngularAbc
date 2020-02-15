import { AutorsService } from './services/autors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  likes=0;

  constructor(private autorsService: AutorsService){}

  likeClick() {
    this.likes++;
  }

  get authors(){
    return this.autorsService.getAutors();
  }
  
}
