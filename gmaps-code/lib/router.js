Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFound: 'notFound'
});

Router.route('/', { name: 'home'});
