import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSortAnimationComponent } from './quick-sort-animation.component';

describe('QuickSortAnimationComponent', () => {
  let component: QuickSortAnimationComponent;
  let fixture: ComponentFixture<QuickSortAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickSortAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSortAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
