import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup!:FormGroup;
  data:any;
  editid:any;
  submitted:boolean=false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$';
  constructor(private formBuilder:FormBuilder, private crud :CrudService , private router:Router){

  }
 ngOnInit(): void {
   this.signup=this.formBuilder.group({
    fullname:['',Validators.required],
    mob:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
   })
   this.editid=localStorage.getItem("edit");
   if(this.editid!=null){
    this.data= localStorage.getItem('user')
    let data =JSON.parse( this.data);
    console.warn("patch data",data)
    console.warn("name",data.fullname)
    this.signup.patchValue({
      fullname:data.fullname,
      email:data.email,
      mob:data.mob,
      password:data.password,

    })
   }
 }

 get m() {
  return this.signup.controls;
}

 onSubmit(){
  this.submitted=true;
  if(this.signup.invalid)
  { return
   }
  if(this.editid!=null){
  this.crud.update(this.signup.value).subscribe(res=>{
    alert("Update succcessful");
     this.router.navigate(['dashboard'])
    localStorage.removeItem("edit");
    localStorage.removeItem("user");
  })
 }else{
  this.crud.signup(this.signup.value).subscribe(res=>{
    alert("Signup succcessful");
    this.router.navigate(['login'])
  })
 }
}

}
