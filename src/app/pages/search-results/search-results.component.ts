import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  listOfAlgorithms = [
    ['binary search', 'Binary-Search'],
    ['breadth first-search', 'Breadth-First-Search'],
    ['depth first search', 'Depth-First-Search'],
    ['mergesort', 'Merge-Sort'],
    ['quicksort', 'Quicksort']
  ]

  matchResults:any = []

  algorithm:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params:any) => {

      this.algorithm = params.query;
      this.algorithm = this.algorithm.trim().toLowerCase()
      let length = this.algorithm.length;
      this.matchResults = []


      for (const algorithm of this.listOfAlgorithms) {
        
        if (algorithm[0].slice(0,length) ==  this.algorithm) {

          this.matchResults.push(algorithm);

        }

      }
    
    });

  }

}
