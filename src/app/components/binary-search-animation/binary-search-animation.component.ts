import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-search-animation',
  templateUrl: './binary-search-animation.component.html',
  styleUrls: ['./binary-search-animation.component.css']
}) 
export class BinarySearchAnimationComponent implements OnInit {

  array1:any[] = [{num:1,arrow:false },
                  {num:2,arrow:false },
                  {num:3,arrow:false },
                  {num:4,arrow:false },
                  {num:5,arrow:false },
                  {num:6,arrow:false },
                  {num:7,arrow:false },
                  {num:8,arrow:false },
                  {num:9,arrow:false },
                  {num:10,arrow:false },];

  array2:any[] = [{num:1,arrow:false, color: '' },
                  {num:2,arrow:false, color: '' },
                  {num:3,arrow:false, color: '' },
                  {num:4,arrow:false, color: '' },
                  {num:5,arrow:false, color: '' },
                  {num:6,arrow:false, color: '' },
                  {num:7,arrow:false, color: '' },
                  {num:8,arrow:false, color: '' },
                  {num:9,arrow:false, color: '' },
                  {num:10,arrow:false, color: '' },];


  indexArrow:number = 1; 

  constructor() { }

  ngOnInit(): void { 
  }

  normalSearch(value:any){

    if (value < 1 || value > 10) {
      return;
    }

    for (const object of this.array1) {
      object.arrow = false;
    }

    let valores = 0;

    let interval = setInterval(() => {

      if (value-1 == valores) {
        clearInterval(interval);
      }

      if (valores !== 0) {
        this.array1[valores-1].arrow = false;
      }
      
      this.array1[valores].arrow = true;
      valores++;    

    }, 1000);

  }

  binarySearch(value:any):any{  

    if (value < 1 || value > 10) {
      return -1;
    }

    for (const object of this.array2) {
      object.arrow = false;
      object.color = '';
    }

      let ilefts = 1;
      let irights = 1
      let lastLefts:any[] = ['lefts',0];
      let lastRights:any[] = ['rights',this.array2.length - 1];  

      let left = 0;
      let right = this.array2.length - 1;
      let mid;

      this.array2[left].arrow = true
      this.array2[left].color = 'green'

      this.array2[right].arrow = true
      this.array2[right].color = 'red'


      const myLoop = () => {           
        setTimeout(():any => {   
        

            mid = left + Math.floor((right - left) / 2);
            // this.array2[mid].arrow = true;

            // If the element is present at the middle itself
            if (this.array2[mid].num == value){

                for (const object of this.array2) {
                  object.arrow = false;
                  object.color = '';
                }

                this.array2[mid].arrow = true;
                this.array2[mid].color = 'green';            
                return mid;

            }

            // If element is smaller than mid, then it can only be present in left subarray
            if (this.array2[mid].num > value){

              
                
                this.array2[lastRights[irights]].arrow = false;
                lastRights.push(mid);
                irights++;


                this.array2[mid].arrow = true;
                this.array2[mid].color = 'red';
                right = mid - 1;

            }
                
            // Else the element can only be present in right subarray
            else{

                
                this.array2[lastLefts[ilefts]].arrow = false;
                lastLefts.push(mid);
                ilefts++;

                console.log(lastLefts)

              this.array2[mid].arrow = true;
              this.array2[mid].color = 'green';
              left = mid + 1;

            }
                   
                                
            if (right >= left) {   

              myLoop();

            }else{

              return -1;

            }

        }, 1000)
      }
  
      myLoop();

  }

}
