import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchInput:string = ''
  isSearching:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  searchAlgorithm(){

    if (this.searchInput.length === 0 || this.searchInput.length > 1000 ) {
      return;
    }

    this.router.navigateByUrl(`/results/${this.searchInput}`);
    
  }

  openSearch(){
    this.isSearching = !this.isSearching
  }
}
