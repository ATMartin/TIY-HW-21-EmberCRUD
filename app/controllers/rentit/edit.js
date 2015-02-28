import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveEdited: function() {
      var model = this.get('model');
      this.set('model.priceCost', +this.get('model.priceCost'));
      console.log(model);
      var self=this;
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/RentIt/" + model.objectId,
        type: "PUT",
        data: JSON.stringify(model)  
      }).done(function(res) { 
        console.log(res);
        self.transitionToRoute('rentit.view', model);
       });
    }
  }
});
