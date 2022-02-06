import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BinarySearchService {

  constructor() { }

  binarySearchRecursive(arr:any[], left:number, right:number, objective:number):number{

    if (right >= left) {
        let mid = left + Math.floor((right - left) / 2);
 
        // If the element is present at the middle itself
        if (arr[mid] == objective)
            return mid;
 
        // If element is smaller than mid, then it can only be present in left subarray
        if (arr[mid] > objective)
            return this.binarySearchRecursive(arr, left, mid - 1, objective);
 
        // Else the element can only be present in right subarray
        return this.binarySearchRecursive(arr, mid + 1, right, objective);
    }
 
    // We reach here when element is not present in array
    return -1;

  }

  binarySearchIterative(arr:any[], objetive:number){
    
      let left = 0;
      let right = arr.length - 1;
      let mid;
      while (right >= left) {
        
          mid = left + Math.floor((right - left) / 2);
  
          // If the element is present at the middle itself
          if (arr[mid] == objetive)
              return mid;
  
          // If element is smaller than mid, then it can only be present in left subarray
          if (arr[mid] > objetive)
          right = mid - 1;
              
          // Else the element can only be present in right subarray
          else 
          left = mid + 1;
      }
  
      // We reach here when element is not present in array
      return -1;

  }

}
