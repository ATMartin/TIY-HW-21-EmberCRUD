import Ember from 'ember';

export default Ember.ObjectController.extend({
actions: {
    viewDetails: function() {
      var model = this.get('model');
      console.log(model);
      this.transitionToRoute('rentit.view', model);       
    }
  }
});
