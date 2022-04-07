import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfAlgorithms = [
    'Binary-Search', 
    'Breadth-First-Search',
    'Depth-First-Search', 
    'Merge-Sort',
    'Quicksort' 
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewRandomAlgorithm(){

    let randomNumber = this.random(0, this.listOfAlgorithms.length -1 )

    this.router.navigateByUrl(`algorithm/${this.listOfAlgorithms[randomNumber]}`);

  }

  random(min:number, max:number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

}
