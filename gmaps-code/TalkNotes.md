# Tech Lancaster December 2014 Talk Notes
#### Live Maps with Meteorjs and Google Maps Javascript API

## Step One: Drawing a map in a route
`git checkout cce687f6184c60320c59b28374819b69e1bb1389`

* List packages used in project
* Briefly discuss project folder structure
* Show `router.js` to discuss routing
* Show `main.html` for google maps include
* Show `map.js` for `template.rendered` override to initialize map
* Discuss `session` variable
* Show `client\lib\google_maps.js` for initialization code

## Step Two: Adding more google maps features
`git checkout 4b7dc5a2393478d3c22dcc3ab31777cd88a4e6ef`

* Explain modified `client\lib\google_maps.js` code
* Discuss the addition of geolocation
* Discuss the addition of the search box

## Step Three: Bringing in some data
`git checkout a38bad537a3660e70154a255ad9da8573d372a40`

* Need to create locations in `lib\collection\locations.js`
* Can add fixture data for prototyping
* Take advantage of mongodb spatial features
* Notice autostreaming of locations.  Sends all locations down.
* Show helper on how the count is calculated.  `find(); vs `find().fetch();`

## Step Four: Drawing data naively
`git checkout 78ecf852516a54cd31c3d3a31b4d4f6d268a1867`

* Run `meteor reset`
* Explain `Deps.autorun`
* Show modifications for `google_maps.js`
* Explain that markers never get removed
* Explain that this isn't truly reactive

## Step Five: Getting ONLY the data we need
`git checkout 4abf68b968f02b93145ebabd53fb452258a92188`

* Run `meteor reset`
* Remove autopublish - we don't need it all
* Let meteor run while talking about other issues
* Increase the data 100 fold - slow
* Don't need ALL data just what's on screen
* Subscribe and publish manually
* Show how to do a publish in `server\publications\publications.js`
* Show how to subscribe in `google_maps.js`
* MUCH, MUCH faster
* Not REMOVING markers (which is bad)

## Step Six: Making it truly reactive
`git checkout 6bf184ba3937789e7c48fd885f7400295fdc5b22`

* Talk about the observe pattern for collections
* Show removed code from `google_maps.js`
* Show altered code in `map.js`
* Screaming fast
* Markers are added/removed quickly in response to subscription
* Maximizing spatial index from mongodb

## Step Seven: Adding new locations manually
`git checkout [Add]`

* Remove insecure package - we don't want it
* Show the locations add stuff quickly (maybe)
* Show changes to `router.js` for new named routes
* Discuss the onBeforeAction
* Show changes to `map.js` for routing on selection
* Show changes to `publications.js` to id subscription
* Show changes to `lib\publications\locations.js` to provide permissions to update
* Show `addLocation.js` to show how to add locations

## Conclusion

* Ask for questions
* Remind people code is on github
* Always available for questions
