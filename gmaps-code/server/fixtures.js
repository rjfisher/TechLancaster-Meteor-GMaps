var latMin = 40.00860681,
latMax = 40.113712684,
lngMin = -76.5542851,
lngMax = -75.0334645;

if (Locations.find({}).count() === 0) {
  for (var i = 0; i < 100000; i++) {
    var lat = Math.random()*(latMax - latMin) + latMin;
    var lng = Math.random()*(lngMax - lngMin) + lngMin;

    if (i % 1000 === 0)
      console.log(i + ': (Lat, Lng)' + lat + ', ' + lng + ')');

    var id = Locations.insert({
      name: 'Location: ' + i,
      author: null,
      address: '1234 Fake Street',
      loc: {
        lon: lng,
        lat: lat
      },
      submitted: new Date(),
      items: []
    });
  }

  Locations._ensureIndex({loc: '2d'});
}
