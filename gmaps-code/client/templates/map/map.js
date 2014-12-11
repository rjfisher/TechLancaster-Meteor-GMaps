Template.map.rendered = function() {
  if (!Session.get('map')) {
    gmaps.initialize();
  }
};
