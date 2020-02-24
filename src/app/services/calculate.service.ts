import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
  public Add(i:number,j:number):number{
    return Number(i)+Number(j);
  }
  public Mul(i:number,j:number):number{
    return i*j;
  }
  public greet(name:string):string{
    let v='hello'+name;
    return v;
  }
  public sub(i:number,j:number):number
  {
    return Number(i)-Number(j);
  }
  public Division(i:number,j:number):number
  {
    return Number(i)/Number(j);
}
}
