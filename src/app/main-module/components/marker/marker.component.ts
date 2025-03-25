import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../services/map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrl: './marker.component.scss',
  standalone: false,
})
export class MarkerComponent implements OnInit {

  constructor(private mapService: MapService){}
  
  ngOnInit(): void {
    this.mapService.markers$.subscribe(markers => {
      const map = this.mapService.getMapInstance();
      if(!map) return;

      // Очищаємо попередні маркери (щоб уникнути дублювання)
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Додаємо нові маркери
      markers.forEach(markerData => {
        L.marker([markerData.lat, markerData.lng])
          .addTo(map)
          .bindPopup('Новий маркер')
          .openPopup();
      });
    })
  }
}
