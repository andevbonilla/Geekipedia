import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadthFirstSearchPageComponent } from './breadth-first-search-page.component';

describe('BreadthFirstSearchPageComponent', () => {
  let component: BreadthFirstSearchPageComponent;
  let fixture: ComponentFixture<BreadthFirstSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadthFirstSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadthFirstSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
