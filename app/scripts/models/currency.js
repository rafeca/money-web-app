define([
  'backbone',
  'money'
], function (Backbone, Money) {
  'use strict';

  return Backbone.Model.extend({
    initialize: function () {
      this.set('value', this.convert());
    },

    convert: function () {
      return Money.convert(this.get('baseAmount'), {
        from: this.get('baseCurrency'),
        to: this.get('name')
      });
    }
  });
});
