import { routes } from './app.routes';
import { AppAdmin } from './view/app.admin';
import { AppUser } from './view/app.user';
import { UsersService } from './services/users.service';
import { AutorsService } from './services/autors.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    AppAdmin,
    AppUser
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AutorsService,
    UsersService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
