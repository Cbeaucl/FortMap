import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFeatureListComponent } from './map-feature-list.component';

describe('MapFeatureListComponent', () => {
  let component: MapFeatureListComponent;
  let fixture: ComponentFixture<MapFeatureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFeatureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
