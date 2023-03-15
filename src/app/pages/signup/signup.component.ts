import { Component,OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   email :string='';
   password:string='';


  constructor(private test:TestService,private router:Router )  {}

ngOnInit(): void {
  
}
  
  register(){


    if(this.email ==''){
    alert('Please enter email');
    return;
  }

 
    if(this.password ==''){
    alert('Please password');
    return;
  }
console.log(this.email, this.password);
  this.test.register(this.email,this.password);
  this.email='';
  this.password='';
  this.router.navigate(['home']);

  }

}
