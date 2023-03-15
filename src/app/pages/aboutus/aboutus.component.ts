import { Component ,OnInit} from '@angular/core';
import { TestService } from 'src/app/test.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit{


  constructor (public test:TestService ){}
  
  ngOnInit(){

    this.test.yes()
  }
}
