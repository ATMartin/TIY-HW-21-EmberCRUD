import Ember from 'ember';

export default Ember.ObjectController.extend({
  allCategories: function() {
    var allCats = [];
    this.get('model').forEach(function(item) {
      allCats.push(item.categories);
    });
    allCats = [].concat.apply([], allCats);
    allCats = allCats.reduce(function(acc, item) {
      return acc.indexOf(item) > -1 ? acc : acc + ',' + item;
    }).split(',');
    console.log(allCats);
    return allCats;
  }.property()
});
