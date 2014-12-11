gmaps = {
  map: null,

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

    this.map = map;
    Session.set('map', true);
  }
};
