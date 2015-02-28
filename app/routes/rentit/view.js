import Ember from 'ember';

export default Ember.Route.extend({ 
  model: function(params) {
    return Ember.$.get("https://api.parse.com/1/classes/RentIt/" + params.objectId).done(function(res) { return res; });
  }
});
