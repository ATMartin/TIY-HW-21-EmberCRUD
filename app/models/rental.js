import DS from 'ember-data';

export default DS.Model.extend({
  itemName: DS.attr('string'),
  priceCost: DS.attr('number'),
  priceInterval: DS.attr('string'),
  description: DS.attr('string'),
  categories: DS.attr(),
  available: DS.attr('boolean')  
});
