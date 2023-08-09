import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal  from 'sweetalert2';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  item:any[]=['Software','QC Testing']
  registrationForm: FormGroup = new FormGroup({});
  get firstName(){
    return this.registrationForm.get('firstName')
  }
  get employeename(){
    return this.registrationForm.get('employeename')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get password(){
    return this.registrationForm.get('password')
  }
  get arrselecter(){
    return this.registrationForm.get('arrselecter')
  }
  constructor(private formBuilder: FormBuilder,private ApiService : ApiService,private router:Router) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      arrselecter: ['', Validators.required],
      employeename: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    console.log(this.arrselecter?.value) 
    
    if (this.registrationForm.valid) {
      let user = {department:this.arrselecter?.value , employeeName:this.employeename?.value,email:this.email?.value,password:this.password?.value}
      this.ApiService.registerUser(user).subscribe((res)=>{
        // console.log(res)
        // console.log(user)
        if(res.message == 'User registered successfully'){
          Swal.fire({
         icon: 'success',
   text: 'Registered',
   validationMessage:'Please login',
  //  confirmButtonColor:'#0B5ED7'
   confirmButtonColor:'#008000',
       })
       this.router.navigate(['/login'])
        }else{
          Swal.fire({
            icon:'error',
            text:'Oops!User Already exist',
            validationMessage:'Please login'
          })
        }
      },(error)=>{
    
      })
     
      console.log(this.registrationForm);
    }
  }
}
