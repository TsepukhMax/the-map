import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  standalone: false,
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  constructor(private mapService: MapService){}

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    // Створюємо карту
    this.map = L.map('map').setView([51.505, -0.09], 13); // координати та зум

    // Додаємо плитки (ти можеш змінити на бажане джерело)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Додаємо обробник кліку, щоб передавати координати в MapService
    this.map.on('click', (event: L.LeafletMouseEvent) => {
      this.mapService.addMarker(event.latlng.lat, event.latlng.lng);
    });

    // Передаємо карту в MapService для подальшого використання в MarkerComponent
    this.mapService.setMapInstance(this.map);
  }
}
