import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router,private test:TestService){}

  home=this.test.givedata()

gotohere(id:any){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}
ngOnInit(){

  this.test.yes();
}
}
