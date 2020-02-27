import { AppAdmin } from './view/app.admin';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router'

export let routes : Routes = [
    { path: 'admin/:data', component: AppAdmin }
];
