import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['shopping-cart'],
  cart: Ember.inject.service(),
  actions: {
    decrementItem(item){
      this.get('cart').decrement(item);
    },
    removeItem(item){
      this.get('cart').remove(item);
    }
  }
});
