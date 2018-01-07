import {  Component } from '@angular/core';
import { AgmCoreModule ,MarkerManager,GoogleMapsAPIWrapper} from '@agm/core';

@Component({
  selector: 'app-maps',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  templateUrl: './maps.component.html'
})
export class MapsComponent {
  constructor(private manager:MarkerManager,private api:GoogleMapsAPIWrapper){}

markers: marker[] =
 [
   {latt: 36.1234,longg:36.1223},
   {latt:31.12313,longg:36.1234},
   {latt:32.12313,longg:34.1234},
   {latt:3.12313,longg:36.1234}
   ];
 lat: number = 31.678418;
 lng: number = 35.809007;
}

interface marker {
	latt: number;
	longg: number;

}