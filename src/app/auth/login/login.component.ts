
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }
  OnSubmit() {
    console.log(this.formModel.UserName);

    console.log("this.formModel.UserName");

    if(this.formModel.UserName =="admin"){
      localStorage.setItem('adminin', "admin");
    }
    localStorage.setItem('token', "token");
    window.location.reload();
    this.router.navigateByUrl('/home');
  }
}
