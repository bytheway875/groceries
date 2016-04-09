import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    this.store.findAll('bogo');
    this.store.findAll('sale');
    return this.store.findAll('product');
  }
});
