import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any = {
    id:0,
  username:'NAaman',
  email:'naman@gmail.com',
  password:'',
  userType:'',
  phone:'768565744',
  confirmed:false

  }
  userId:any;
  edit:boolean=false;
  admin: boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('adminin') != null){
      this.admin = true;
    }
      }
      Edit(){
        this.edit =true;
        //window.location.reload();
      }

      reload(){
        this.edit =false;
      }
      updateUser(){

      }
      Delete(){
        this.edit =true;
        //window.location.reload();
      }

}
