import Ember from 'ember';

export default Ember.Controller.extend({
  cart: Ember.inject.service(),
  actions: {
    addToCart(product){
      this.get('cart').add(product);
    },
    emptyCart(){
      this.get('cart').empty();
    }
  }
});
