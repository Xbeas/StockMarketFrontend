import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipo-listing',
  templateUrl: './ipo-listing.component.html',
  styleUrls: ['./ipo-listing.component.css']
})
export class IpoListingComponent implements OnInit {
  admin: boolean=false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('adminin') != null){
      this.admin = true;
    }
  }

}
