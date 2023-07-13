import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!:FormGroup
  constructor(private formBuilder:FormBuilder, private crud :CrudService , private router:Router){

  }
 ngOnInit(): void {
   this.login=this.formBuilder.group({
    fullname:[''],
    mob:[''],
    email:[''],
    password:[''],
   })
 }
 onSubmit(){
  this.crud.login().subscribe(res=>{
    const user=res.find((a:any)=>{
      return a.email===this.login.value.email && a.password===this.login.value.password
    })
    if(user){
    alert("Login succcessful");
    this.router.navigate(['dashboard'])
  }else{
    alert("user not found")
  }
   
  })
 }

}
