import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSortPageComponent } from './quick-sort-page.component';

describe('QuickSortPageComponent', () => {
  let component: QuickSortPageComponent;
  let fixture: ComponentFixture<QuickSortPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickSortPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSortPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
