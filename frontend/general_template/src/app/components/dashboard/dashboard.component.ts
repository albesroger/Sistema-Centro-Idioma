import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { RouterOutlet } from '@angular/router';
import { CurrentUsersComponent } from "./currentUsers/currentUsers.component";

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, ProductComponent, RouterOutlet, CurrentUsersComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
