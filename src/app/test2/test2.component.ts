import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../services/calculate.service';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  providers:[CalculateService]
})
export class Test2Component implements OnInit {

  constructor(private service:CalculateService) {
    console.log('subtraction:'+this.service.sub(65,32));
    console.log('division:'+this.service.Division(2,4));
   }

  ngOnInit() {
  }

}
