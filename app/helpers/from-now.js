import Ember from 'ember';

export function fromNow(params/*, hash*/) {
  return moment(params[0]).fromNow();
}

export default Ember.Helper.helper(fromNow);
