import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoListingComponent } from './ipo-listing.component';

describe('IpoListingComponent', () => {
  let component: IpoListingComponent;
  let fixture: ComponentFixture<IpoListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpoListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
