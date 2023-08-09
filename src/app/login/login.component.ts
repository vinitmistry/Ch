import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal  from 'sweetalert2';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private ApiService:ApiService,private formBuilder:FormBuilder,private router:Router){}
  loginForm: FormGroup = new FormGroup({});
  get employeename(){
    return this.loginForm.get('employeename')
  }
  get password(){
    return this.loginForm.get('password')
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      employeename: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    // console.log(this.password.value)
    // console.log("hiw")
    if (this.loginForm.valid) {
      let user = { employeeName:this.employeename?.value,password:this.password?.value}
      this.ApiService.loginUser(user).subscribe((res)=>{
        // console.log(res)
        // console.log(user)
        if(res.message == 'Login successfull'){
          Swal.fire({
            icon: 'success',
            text: 'Logged In',
            confirmButtonColor:'#008000'
          })
          this.router.navigate(['/nav']);
        }
        else{
          console.log('HERE')
          Swal.fire({
            icon:'error',
            text:'Oops!Incorrect Credentials',
            validationMessage:'Please login'
          })
        }
      },(error)=>{
    
      })
     
  //     console.log(this.registrationForm);
    }
  }
}
