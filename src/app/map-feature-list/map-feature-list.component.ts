import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { MapFeature } from '../map-feature';
import { MapFeatureService } from '../map-feature.service';
import { finalize } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-map-feature-list',
  templateUrl: './map-feature-list.component.html',
  styleUrls: ['./map-feature-list.component.css']
})
export class MapFeatureListComponent implements OnInit {
  features: Observable<MapFeature[]>;
  isLoading = false;
  selectedFeature: MapFeature;

  constructor(private service: MapFeatureService) { }

  ngOnInit() {
    this.getFeatures();
  }

  getFeatures() {
    this.isLoading = true;
    this.features = this.service.getFeatures().pipe(finalize(() => this.isLoading = false))
    this.selectedFeature = undefined;

  }

  select(feature: MapFeature) {
    this.selectedFeature = feature;

  }

}
