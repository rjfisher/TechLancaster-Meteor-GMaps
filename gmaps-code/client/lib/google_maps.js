gmaps = {
  map: null,

  latLngs: [],
  markers: [],
  markerData: [],

  addMarker: function(marker) {
    var gLatLng = new google.maps.LatLng(marker.lat, marker.lng);
    var gMarker = new google.maps.Marker({
      position: gLatLng,
      map: this.map,
      title: marker.title,
      //animation: google.maps.Animation.DROP,
      icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    this.latLngs.push(gLatLng);
    this.markers.push(gMarker);
    this.markerData.push(marker);
    return gMarker;
  },

  markerExists: function(key, val) {
    _.each(this.markerData, function(marker) {
      if (marker[key] === val) {
        return true;
      }
    });

    return false;
  },

  initialize: function() {
    var mapOptions = {
      zoom: 18,
      minZoom: 12,
      center: new google.maps.LatLng(40.044171, -76.313411),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
      document.getElementById('map-canvas'),
      mapOptions
    );

    // Set up the search box
    var input = document.getElementById('pac-input');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    var searchBox = new google.maps.places.SearchBox(input);

    google.maps.event.addListener(searchBox, 'places_changed', function(){
      var places = searchBox.getPlaces();

      if (places.length === 0) {
        toastr.error('Location could not be found');
        return;
      }

      if (places.length > 1) {
        toastr.warning('More than one location was found!');
      }

      var place = new google.maps.Marker({
        position: places[0].geometry.location,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        title: places[0].name,
        icon: '//maps.google.com/mapfiles/ms/icons/green-dot.png'
      });

      map.setCenter(places[0].geometry.location);
    });

    // Add geolocation functionality
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var loc = new google.maps.LatLng(position.coords.latitude,
                                              position.coords.longitude);

        var location = new google.maps.Marker({
          position: loc,
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          title: 'Your Location'
        });

        map.setCenter(loc);
      }, function() {
        toastr.error('Geo-Location Error');
      });
    } else {
      toastr.error('Your browser doesn\'t support geolocation');
    }

    this.map = map;
    Session.set('map', true);
  }
};
