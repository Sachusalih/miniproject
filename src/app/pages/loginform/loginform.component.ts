import { Component,OnInit} from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  
  email :string="";
  password: string="";
    
  constructor(private test:TestService)  {}


 

  login(){


    if(this.email ==''){
    alert('Please enter email');
    return;
  }

 
    if(this.password ==''){
    alert('Please enter password');
    return;
  }

  this.test.login(this.email,this.password);
  this.email='';
  this.password='';


  }

  ngOnInit(){

    this.test.no();
  }
  
}
