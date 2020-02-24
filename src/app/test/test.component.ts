import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../services/calculate.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[CalculateService]
})
export class TestComponent implements OnInit {

  constructor(private service:CalculateService) { }

  ngOnInit() {
    console.log('Addition:'+this.service.Add(1,2));
    console.log('mul:'+this.service.Mul(2,6));
    console.log(this.service.greet('jyo'));
    console.log('subtraction:'+this.service.sub(65,32));
    console.log('division:'+this.service.Division(2,4));
  }
  f(){
    console.log(this.service.greet('sai'));
  }

}
