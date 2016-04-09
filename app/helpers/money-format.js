import Ember from 'ember';

export function moneyFormat(amt) {
  if(amt[0] === undefined){ return 'N/A'; }
  let amount = (isNaN(amt[0]) ? parseInt(amt[0]) : amt[0]) || 0;
  return amount.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
}


export default Ember.Helper.helper(moneyFormat);
