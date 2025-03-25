import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map!: L.Map;
  private MarkersSubject = new BehaviorSubject<{lat: number, lng: number}[]>([]);
  markers$ = this.MarkersSubject.asObservable();

  setMapInstance(map: L.Map) {
    this.map = map;
  }

  addMarker(lat: number, lng: number){
    const curentMarkers = this.MarkersSubject.value;
    this.MarkersSubject.next([...curentMarkers, {lat, lng}]);
  }

  getMapInstance() {
    return this.map;
  }

  constructor() { }
}
