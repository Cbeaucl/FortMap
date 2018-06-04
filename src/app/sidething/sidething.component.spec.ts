import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidethingComponent } from './sidething.component';

describe('SidethingComponent', () => {
  let component: SidethingComponent;
  let fixture: ComponentFixture<SidethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
