Template.map.rendered = function() {
  if (!Session.get('map')) {
    gmaps.initialize();
  }

  Deps.autorun(function() {
    var locations = Locations.find().fetch();

    if (locations) {
      _.each(locations, function(location) {
        if(location) {
          if (!gmaps.markerExists('id', location._id)) {
            var marker = {
              id: location._id,
              lat: location.loc.lat,
              lng: location.loc.lon,
              title: location.name
            };

            gmaps.addMarker(marker);
          }
        }
      });
    }
  });
};

Template.map.helpers({
  locationCount: function() {
    return Locations.find().count();
  }
});
