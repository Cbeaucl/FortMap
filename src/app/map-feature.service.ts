import { Injectable } from '@angular/core';
import { Observable, of, } from '../../node_modules/rxjs';
import { delay } from 'rxjs/operators';
import { MapFeature } from './map-feature';

@Injectable({
  providedIn: 'root'
})
export class MapFeatureService {
  features: MapFeature[] = [{
    name: 'Hullo',
    description: 'Sure',
    latitude: 1,
    longitude: 2
  }];
  delayMs = 500;
  constructor() { }

  getFeatures(): Observable<MapFeature[]> {
      return of(this.features).pipe(delay(this.delayMs));
  }

}
