# Tech Lancaster December 2014 Talk Notes
#### Live Maps with Meteorjs and Google Maps Javascript API

## Step One: Drawing a map in a route
`git pull cce687f6184c60320c59b28374819b69e1bb1389`

* List packages used in project
* Briefly discuss project folder structure
* Show `router.js` to discuss routing
* Show `main.html` for google maps include
* Show `map.js` for `template.rendered` override to initialize map
* Discuss `session` variable
* Show `client\lib\google_maps.js` for initialization code

## Step Two: Adding more google maps features
`git pull 4b7dc5a2393478d3c22dcc3ab31777cd88a4e6ef`

* Explain modified `client\lib\google_maps.js` code
* Discuss the addition of geolocation
* Discuss the addition of the search box

## Step Three: Bringing in some data
`git pull a38bad537a3660e70154a255ad9da8573d372a40`

* Need to create locations in `lib\collection\locations.js`
* Can add fixture data for prototyping
* Take advantage of mongodb spatial features
* Notice autostreaming of locations.  Sends all locations down.
* Show helper on how the count is calculated.  `find(); vs `find().fetch();`

## Step Four: Drawing data naively
`git pull [Add]`

* Run `meteor reset`
* Explain `Deps.autorun`
* Show modifications for `google_maps.js`
* Explain that markers never get removed
* Explain that this isn't truly reactive

## Step Five: Getting ONLY the data we need
`git pull [Add]`

* Run `meteor reset`
