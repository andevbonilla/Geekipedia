import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-search-page',
  templateUrl: './binary-search-page.component.html',
  styleUrls: ['./binary-search-page.component.css']
})
export class BinarySearchPageComponent implements OnInit {

  recursiveCode:string = `function binarySearch(arr, left, right, x){
                              if (right >= left) {
                                  let mid = left + Math.floor((right - left) / 2);

                                  // If the element is present at the middle
                                   // itself
                                  if (arr[mid] == x)
                                      return mid;

                                  // If element is smaller than mid, then
                                  // it can only be present in left subarray
                                  if (arr[mid] > x)
                                      return binarySearch(arr, left, mid - 1, x);

                                  // Else the element can only be present
                                  // in right subarray
                                  return binarySearch(arr, mid + 1, right, x);
                              }

                              // We reach here when element is not
                              // present in array
                              return -1;
                          }`

  iterativeCode:string = ``

  constructor() { }

  ngOnInit(): void {
  }

}
