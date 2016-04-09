import DS from 'ember-data';
import Ember from 'ember'

export default DS.Model.extend({
  name: DS.attr(),
  productCode: DS.attr(),
  regularPrice: DS.attr(),

  bogo: DS.belongsTo(),
  sale: DS.belongsTo(),

  // At this time, only one offer at a time
  // is supported and bogo is prioritized.
  currentOffer: Ember.computed.or('bogo.content', 'sale.content')
});
