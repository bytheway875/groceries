import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['sale-banner'],
  positionalParams: ['currentOffer'],

  offerType: Ember.computed('currentOffer', function(){
    return this.get('currentOffer.constructor.modelName');
  }),

  isSale: Ember.computed.equal('offerType', 'sale'),
  isBogo: Ember.computed.equal('offerType', 'bogo')
});
