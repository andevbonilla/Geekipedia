import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadthFirstSearchAnimationComponent } from './breadth-first-search-animation.component';

describe('BreadthFirstSearchAnimationComponent', () => {
  let component: BreadthFirstSearchAnimationComponent;
  let fixture: ComponentFixture<BreadthFirstSearchAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadthFirstSearchAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadthFirstSearchAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
