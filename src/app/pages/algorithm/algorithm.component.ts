import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {

  algorithm:any;
  isRecursive:boolean = false;

  typeAlgorithm:any = {};

  // show animations
  binarySearchAnimation:boolean = false;
  quickSortAnimation:boolean = false
  depthFirstSearch:boolean = false;
  breadthFirstSearch:boolean = false;
  mergeSort:boolean = false;


  constructor(private activatedRoute:ActivatedRoute) {

    this.algorithm = this.activatedRoute.snapshot.paramMap.get('name');

    switch (this.algorithm) {

      case 'Binary-Search':

        this.binarySearchAnimation = true;        
        break;

      case 'Quicksort':

        this.quickSortAnimation = true;    
        break;

      case 'Depth-First-Search':

        this.depthFirstSearch = true;      
        break;

      case 'Breadth-First-Search':

        this.breadthFirstSearch = true;      
        break;

      case 'Merge-Sort':

        this.mergeSort = true;      
        break;
    
      default:
        break;

    }

   }

  ngOnInit(): void {

  }

}
