import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {ProfileComponent} from './profile.component';
import {ContactComponent} from './contact.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <a [routerLink]="['./Home']">Home</a> |
    <a [routerLink]="['./Profile']">Profile</a> |
    <a [routerLink]="['./Contact']">Contact Me</a>
    <hr>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})

@RouteConfig([
  { path: '/home', as: 'Home', component: HomeComponent },
  { path: '/profile', as: 'Profile', component: ProfileComponent },
  { path: '/contact', as: 'Contact', component: ContactComponent }
])

export class AppComponent{
}
