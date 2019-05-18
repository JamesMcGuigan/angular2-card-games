import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChipStatsComponent } from './user-chip-stats.component';

describe('UserChipStatsComponent', () => {
  let component: UserChipStatsComponent;
  let fixture: ComponentFixture<UserChipStatsComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [ UserChipStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChipStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
