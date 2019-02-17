import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCategoriesComponent } from './company-categories.component';

describe('CompanyCategoriesComponent', () => {
  let component: CompanyCategoriesComponent;
  let fixture: ComponentFixture<CompanyCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
