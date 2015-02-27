import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    popUp: function() {
      alert("I'M ON THE OUTSIIIIIDEEE...");  
    },
    newRental: function() {
      alert("Got it");
      /*
      var newRental = this.get('rental');
      console.log(newRental);
      */
    }
  }
});
