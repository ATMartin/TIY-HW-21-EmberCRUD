import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var cat = params.category;

    return Ember.$.get("https://api.parse.com/1/classes/RentIt")
      .then(function(res) { 
        return res.results.filter(function(item) {
          return item.categories.indexOf(cat) !== -1;
        });
       });
  }
});
