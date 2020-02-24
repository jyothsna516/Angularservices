import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,} from '@angular/forms'
import { from } from 'rxjs';
import { ItemService } from '../services/item.service';
import { Item } from '../item';
@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  itemForm:FormGroup;
  submitted=false;
list:Item[];
item:Item;
  constructor(private builder:FormBuilder,private service:ItemService) {
    this.service.GetAll().subscribe(res=>{
      this.list=res;
      console.log(this.list);},
      err =>{console.log(err);})

  }

  ngOnInit() {
    this.itemForm=this.builder.group({
      id:[''],
      name:[''],
      price:[''],
      stock:['']
    });
  }
  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
      //alert(this.itemForm.value["id"])
      this.Add();
  }

  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Search()
  {
    alert(this.itemForm.value["itemid"])
  }
  Add(){
    this.item=new Item();
    this.item.id=this.itemForm.value["itemid"];
    this.item.name=this.itemForm.value["name"];
    this.item.price=Number(this.itemForm.value["price"]);
    this.item.stock=Number(this.itemForm.value["stock"]);
    console.log(this.item);
    this.service.AddItem(this.item).subscribe(res=>{
      console.log('Record Added')
    },err=>{
      console.log(err);
    })
  }


}
