import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
   confirmRental: function() {
    alert("rented");
   },
  goToEdit: function() {
    var model = this.get('model');
    console.log(model);
    this.transitionToRoute('rentit.edit', model); 
  },
  deleteMe: function() {
    var model = this.get('model');
    var self = this;
    Ember.$.ajax({
      url: "https://api.parse.com/1/classes/RentIt/" + model.objectId,
      type: "DELETE"  
    }).done(function(res) {
      console.log(res);
      self.transitionToRoute('rentit.index');
    });
  }

  }
});
