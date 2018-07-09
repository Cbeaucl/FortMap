
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetDashboardComponent } from './sweet-dashboard.component';

describe('SweetDashboardComponent', () => {
  let component: SweetDashboardComponent;
  let fixture: ComponentFixture<SweetDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
