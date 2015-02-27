import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    popUp: function() {
     alert("Rented this!"); 
    }
  }
});
