import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader'

class GoogleMap extends Component{ 
	constructor(props) {
        super(props);
        this.map = null;
		this.infowindow = null;
		this.service = null;
    }
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
        	this.map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: {lat: 37.7749300, lng: -122.4194200}
            });
        	this.initMap();
        }
        else{
            alert("script not loaded")
        }
    }
	initMap() {
		this.infowindow = new window.google.maps.InfoWindow();
		this.getLocation();
		// setupPlaceDetails();
	}
	getLocation() {
		// Try HTML5 geolocation.
	    if (navigator.geolocation) {
	      navigator.geolocation.getCurrentPosition(function(position) {
	        var pos = {
	          lat: position.coords.latitude,
	          lng: position.coords.longitude
	        };
	        console.log(pos);

	        let location = {lat: pos.lat, lng: pos.lng};
	        this.map = new window.google.maps.Map(document.getElementById('map'), {
				center: location,
				zoom: 15
			});

	        this.map.setCenter(pos);
			this.service = new window.google.maps.places.PlacesService(this.map);

	      }, () => {
	      	console.log("here");
	      });
	    } 
	    else {
	      // Browser doesn't support Geolocation
	      console.log("else");
	    }
	}
    render(){
        return(
            <div>
                <div id="map" style={{height: '80%', width: '100%'}}></div>
            </div>
        )
    }
}
export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAC4bVTmV7z7rkLOVmXgxlRBsuYOqaAvQU"]
)(GoogleMap)