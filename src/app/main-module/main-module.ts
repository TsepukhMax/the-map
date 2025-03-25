import { NgModule } from '@angular/core';
import { MapComponent } from './components/map/map.component';
import { MarkerComponent } from './components/marker/marker.component';


@NgModule({
  declarations: [ 
    MapComponent,
    MarkerComponent,
  ],
  imports: [
  ],
  exports: [
    MapComponent,
  ],
})
export class MainModule {}
