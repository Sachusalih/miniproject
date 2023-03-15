import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(public nav:TestService){}

}
