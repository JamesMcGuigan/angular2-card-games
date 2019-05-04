import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneCardDrawComponent } from './page-one-card-draw.component';

describe('PageOneCardDrawComponent', () => {
  let component: PageOneCardDrawComponent;
  let fixture: ComponentFixture<PageOneCardDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOneCardDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneCardDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
