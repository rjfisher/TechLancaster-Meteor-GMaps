var stopMarkers = null;

Template.map.rendered = function() {
  if (!Session.get('map')) {
    gmaps.initialize();
  }

  stopMarkers = LiveMaps.addMarkersToMap(gmaps.map, [{
      cursor: Locations.find(),
      onClick: function() {},
      transform: function(location) {
        return {
          title: location.name,
          position: new google.maps.LatLng(location.loc.lat, location.loc.lon),
          animation: google.maps.Animation.DROP,
          icon: '//maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
      }
  }]);
};

Template.map.helpers({
  locationCount: function() {
    return Locations.find().count();
  }
});

Template.map.destroyed = function() {
  Session.set('map', false);

  if(stopMarkers)
    stopMarkers();
}
