Meteor.publish('locations', function(query) {
  check(query, Object);

  var bounds = query.bounds;
  if (bounds)
    return Locations.find({loc: {$within: {$polygon: bounds}}});

  return Locations.find();
});
