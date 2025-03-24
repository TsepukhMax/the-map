import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  standalone: false,
})
export class MapComponent implements OnInit {
  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    // Створюємо карту
    const map = L.map('map').setView([51.505, -0.09], 13); // координати та зум

    // Додаємо плитки (ти можеш змінити на бажане джерело)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Додаємо маркер
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('<b>Hello world!</b><br />I am a popup.')
      .openPopup();
  }
}
