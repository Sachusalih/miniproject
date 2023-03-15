import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  constructor( private test:TestService){}

  home=this.test.givedata()


  single:any
  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.single=this.home.filter(e =>e.id==id)
    console.log("name",this.single)
  }

}
