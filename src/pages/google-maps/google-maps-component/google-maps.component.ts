import { Component } from '@angular/core';

@Component({
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {
  // Google Map zoom level
  zoom: number = 8;

  // Google Map center
  latitude: number = 53.341318;
  longitude: number = -6.270205;

  markers = [
	  {
		  latitude: 53.341318,
		  longitude: -6.270205,
		  label: "ISO Office",
		  description: "14b Kevin Street, Dublin"
	  },
	  {
		  latitude: 51.373858,
		  longitude: 7.215982,
		  label: "B",
		  description: "Description B"
	  },
	  {
		  latitude: 51.723858,
		  longitude: 7.895982,
		  label: "C",
		  description: "Description C"
	  }
  ]

}
