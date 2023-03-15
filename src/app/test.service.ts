import { Injectable } from '@angular/core';
import{data} from '../assets/data';
import{AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }
  givedata(){
    return data;
  }
  
  //logim
  login(email : string,password : string)
  {
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['/home']);
    },err=>{
      alert(err.message);
      this.router.navigate(['/login']);

    })
  }

  //register

  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/signup']);
    })
  }
visible:boolean | undefined
no()
{

  this.visible=false;
}
yes()
{
this.visible=true;
}
}