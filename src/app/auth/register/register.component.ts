import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any = {
    id:0,
  username:'',
  email:'',
  password:'',
  phone:'',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
