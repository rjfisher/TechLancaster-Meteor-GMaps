Template.map.rendered = function() {
  if (!Session.get('map')) {
    gmaps.initialize();
  }
};

Template.map.helpers({
  locationCount: function() {
    return Locations.find().count();
  }
});
