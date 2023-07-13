import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Data: any;
  constructor(private crud:CrudService , private router :Router){}
  ngOnInit(): void {
    this.crud.login().subscribe((res)=>{
      this.Data=res;
      console.warn("data",this.Data)
    })
  }

  Edit(data:any){
    console.warn("edit data",data)
    localStorage.setItem("user",JSON.stringify(data));
    localStorage.setItem("edit",data.id)
    this.router.navigate(['signup'])
  }

  Delete(deleteId:any){
    this.crud.delete(deleteId).subscribe((res)=>{
      this.Data=res;
      alert("Record Deleted Successfully")
      console.warn("data",this.Data)
      this.ngOnInit();
    })
  }

}
