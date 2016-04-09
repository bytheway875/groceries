import Ember from 'ember';
const {
  Service,
  computed,
  inject } = Ember;

export default Service.extend({
  cartItems: [],
  cart: {},
  store: inject.service(),
  total: computed('cartItems.@each.total', function(){
    let totals = this.get('cartItems').mapBy('total');
    return totals.reduce((a, b) => a + b, 0);
  }),

  init() {
    this._super(...arguments);
  },

  add(item) {
    var existingItem = this.get('cartItems').findBy('productCode', Ember.get(item, 'productCode'));
    if(existingItem){
      existingItem.incrementProperty('quantity', 1);
    } else {
      var newItem = this.get('store').createRecord('cart-item', { product: item, quantity: 1 });
      this.get('cartItems').pushObject(newItem);
    }
  },

  decrement(item) {
    item.decrementProperty('quantity', 1);
    if(item.get('quantity') === 0){
      this.get('cartItems').removeObject(item);
    }
  },
  remove(item){
    this.get('cartItems').removeObject(item);
  },

  empty() {
    this.get('cartItems').setObjects([]);
  }

});
