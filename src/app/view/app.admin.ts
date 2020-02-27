import { UsersService } from './../services/users.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
// import { combineLatest } from 'rxjs/observable/combineLatest';

let ssddas = "sdas";

@Component({
  selector: 'app-admin',
  // template: `
  //   <p> abc </p> ${ssddas} erwer
  // `,
  templateUrl: './app.admin.html',
  styleUrls: ['./app.admin.scss']
})
export class AppAdmin implements OnInit, OnDestroy {
  users: any = [];
  dane = "jeszcze nic";
  queryParam = "";
  routeSub: Subscription;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.routeSub = combineLatest(this.activatedRoute.params, this.activatedRoute.queryParams)
      .pipe(
        switchMap( ([routeParams, queryParamS]) => {
          this.dane = routeParams['data'];
          this.queryParam = queryParamS['x'];
          return this.usersService.getUsers()//(this.dane)
        })
      )
      .subscribe(resp => this.users = resp, e => console.log("error: ", e));
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe( resp => this.users = resp );
  }

  
}
