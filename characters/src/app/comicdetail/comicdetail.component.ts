import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comicdetail',
  templateUrl: './comicdetail.component.html',
  styleUrls: ['./comicdetail.component.css']
})
export class ComicdetailComponent implements OnInit {
  Data:any;
  myData: any;
  constructor( private crud :CrudService , private router:Router){

  }
 ngOnInit(): void {
  this.Data= localStorage.getItem("comicdetail")
  let data=JSON.parse(this.Data);
  this.myData=data;
  console.warn("details",this.myData)
 }
 

}
