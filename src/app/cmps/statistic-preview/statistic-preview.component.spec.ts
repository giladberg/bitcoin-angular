import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticPreviewComponent } from './statistic-preview.component';

describe('StatisticPreviewComponent', () => {
  let component: StatisticPreviewComponent;
  let fixture: ComponentFixture<StatisticPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
