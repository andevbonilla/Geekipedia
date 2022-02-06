import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort-animation',
  templateUrl: './quick-sort-animation.component.html',
  styleUrls: ['./quick-sort-animation.component.css']
})
export class QuickSortAnimationComponent implements OnInit {

  imgLinks:string[] = [
   'https://res.cloudinary.com/adivinity/image/upload/v1642538360/quickSort_animation_cqtzcz.jpg',
   'https://res.cloudinary.com/adivinity/image/upload/v1642538360/quickSort_animation_1_qvgyzl.jpg',
   'https://res.cloudinary.com/adivinity/image/upload/v1642538360/quickSort_animation_2_qatygv.jpg',
   'https://res.cloudinary.com/adivinity/image/upload/v1642538360/quickSort_animation_3_lsbhqf.jpg'
  ]

  indexImg = 0; 
  srcImg:string = this.imgLinks[this.indexImg];

  constructor() { }

  ngOnInit(): void {
  }

  changeSrc(condition:any){
    
    if (condition == 'increment') {

      if (this.indexImg >= 3) {
        return;
      }

      this.indexImg = this.indexImg + 1 
      this.srcImg = this.imgLinks[this.indexImg] 
      
    }else if (condition == 'decrement') {
      
      if (this.indexImg <= 0) {
        return;
      }

      this.indexImg = this.indexImg - 1
      this.srcImg = this.imgLinks[this.indexImg] 

    }

  }

}
