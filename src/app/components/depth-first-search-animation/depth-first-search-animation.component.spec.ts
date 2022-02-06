import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthFirstSearchAnimationComponent } from './depth-first-search-animation.component';

describe('DepthFirstSearchAnimationComponent', () => {
  let component: DepthFirstSearchAnimationComponent;
  let fixture: ComponentFixture<DepthFirstSearchAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepthFirstSearchAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepthFirstSearchAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
