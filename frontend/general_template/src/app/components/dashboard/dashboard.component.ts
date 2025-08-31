import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, ProductComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
