import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOneCardDrawComponent } from './game-one-card-draw.component';

describe('GameOneCardDrawComponent', () => {
  let component: GameOneCardDrawComponent;
  let fixture: ComponentFixture<GameOneCardDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOneCardDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOneCardDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
