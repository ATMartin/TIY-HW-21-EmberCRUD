import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newRental: function() {
      var rental = {
        "itemName": this.get('itemName'),
        "description": this.get('description'),
        "priceCost": +this.get('priceCost'),
        "priceInterval": this.get('priceInterval'),
        "categories": this.get('categories').split(' ')
      };
      console.log(rental);
      var self = this;
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/RentIt",
        type: "POST",
        data: JSON.stringify(rental)
      }).done(function(d) { 
        console.log(d);
        self.transitionToRoute('rentit.index'); 
      });
    }
  }
});
