import DS from 'ember-data';

export default DS.Model.extend({
  promoPrice: DS.attr(),
  threshold: DS.attr(),

  product: DS.belongsTo()
});
