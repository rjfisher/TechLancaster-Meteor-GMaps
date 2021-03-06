Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFound: 'notFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('/locations/:_id', {
  name: 'location',
  waitOn: function() {
    return Meteor.subscribe('locations', {id: this.params._id, bounds: null});
  },
  data: function() {
    return Locations.findOne(this.params._id);
  }
});

Router.route('/addLocation', {
  name: 'addLocation'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}, { only: 'addLocation'});
