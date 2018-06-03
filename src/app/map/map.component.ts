import { Component, OnInit } from '@angular/core';
import * as L from "leaflet"
import { Map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  protected _map: Map
  constructor() { }

  ngOnInit() {
    this._map = L.map('mapspot', {
      crs: L.CRS.Simple,
      minZoom: -5
    });
    var kaboom = L.icon({
      iconUrl: 'assets/images/explosion.png',

      iconSize: [25, 25], // size of the icon
      iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var bounds: L.LatLngBoundsExpression
    bounds = [[0, 0], [1000, 1000]]
    var image = L.imageOverlay('assets/images/theMap.jpg', bounds).addTo(this._map);
    this._map.fitBounds(bounds);

    this._map.on('click', (e) => {
      var marker = L.marker(e.latlng,{icon: kaboom}).addTo(this._map);
      marker.on('click', () => {
        this._map.removeLayer(marker);
      })
    });


  }

}
