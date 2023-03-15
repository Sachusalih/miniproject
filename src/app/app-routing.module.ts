import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginformComponent } from './pages/loginform/loginform.component';
import { RegisterformComponent } from './pages/registerform/registerform.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',component:LoginformComponent
  },
  {
    path:'register',component:RegisterformComponent
  },
  {
    path:'contact',component:ContactusComponent
  },
  {
    path:'about',component:AboutusComponent
  },
  {
    path:'single',component:SinglepageComponent
  },
  {
    path:'signup',component:SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
