import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  quantity: DS.attr('number', { defaultValue: 0 }),
  product: DS.belongsTo(),

  currentOffer: Ember.computed.oneWay('product.currentOffer'),
  currentOfferType: Ember.computed.oneWay('currentOffer.constructor.modelName'),
  isBogo: Ember.computed.equal('currentOfferType', 'bogo'),
  isSale: Ember.computed.equal('currentOfferType', 'sale'),
  productCode: Ember.computed.oneWay('product.productCode'),
  name: Ember.computed.oneWay('product.name'),
  originalTotal: Ember.computed('product.regularPrice', 'quantity', function(){
    return this.get('product.regularPrice') * this.get('quantity');
  }),
  total: Ember.computed('currentOffer', 'product.regularPrice', 'quantity', function(){
    if(this.get('isBogo')){
      if(this.get('quantity') === 1){ return this.get('originalTotal'); }

      let remainder = this.get('quantity') % 2;
      let bogoEligible = this.get('quantity') - remainder;
      let bogoDeal = (this.get('product.regularPrice') * bogoEligible)/ 2;
      return remainder > 0 ? bogoDeal + this.get('product.regularPrice') : bogoDeal;

    }else if(this.get('isSale')){
      if(this.get('quantity') < this.get('currentOffer.threshold')) {
        return this.get('originalTotal');
      } else {
        return this.get('quantity') * this.get('currentOffer.promoPrice');
      }
    }else {
      return this.get('originalTotal');
    }
  }),
  savings: Ember.computed('originalTotal', 'total', function(){
    return this.get('originalTotal') - this.get('total');
  })
});
