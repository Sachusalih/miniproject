import { Component,OnInit} from '@angular/core';
import { TestService } from 'src/app/test.service';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit{

  constructor(private test:TestService){}
  ngOnInit(){

    this.test.yes();
  }
}
