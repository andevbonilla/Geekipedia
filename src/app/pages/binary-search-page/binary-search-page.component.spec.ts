import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarySearchPageComponent } from './binary-search-page.component';

describe('BinarySearchPageComponent', () => {
  let component: BinarySearchPageComponent;
  let fixture: ComponentFixture<BinarySearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinarySearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinarySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
