import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  auth : boolean = false;
  admin : boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.auth = true;
      if (localStorage.getItem('adminin') != null){
        this.admin = true;
      }
      this.router.navigateByUrl('/home');
    }
  }
  OnLogout(){

    console.log("this.formModel.UserName");

    localStorage.removeItem('token');
    this.auth = false;
    this.admin = false;

    window.location.reload();
  }
  Reload(){
    window.location.reload();
  }
}
