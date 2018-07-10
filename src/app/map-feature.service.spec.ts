import { TestBed, inject } from '@angular/core/testing';

import { MapFeatureService } from './map-feature.service';

describe('MapFeatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapFeatureService]
    });
  });

  it('should be created', inject([MapFeatureService], (service: MapFeatureService) => {
    expect(service).toBeTruthy();
  }));
});
