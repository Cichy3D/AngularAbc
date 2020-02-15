import { AutorsService } from './services/autors.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule
  ],
  providers: [AutorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
