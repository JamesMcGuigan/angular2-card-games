import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeckOfCardsDemo } from './page-deck-of-cards.component';

describe('PageDeckOfCardsDemo', () => {
  let component: PageDeckOfCardsDemo;
  let fixture: ComponentFixture<PageDeckOfCardsDemo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDeckOfCardsDemo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeckOfCardsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
