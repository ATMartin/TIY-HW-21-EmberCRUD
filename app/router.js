import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('rentit', { path: '/' }, function() {
    this.route('add');
    this.route('edit', { path: '/edit/:objectId'});
    this.route('view', { path: '/view/:objectId'});
    this.route('cat', { path: '/cat/:category'});
  });
  this.route('view');
});

export default Router;
