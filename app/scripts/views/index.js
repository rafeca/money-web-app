define([
  'backbone',
  'zeptojs',
  'underscore',
  'templates',
  'money',
  'models/currency',
  'views/currency'
], function (Backbone, $, _, templates, Money, CurrencyModel, CurrencyView) {
  'use strict';

  return Backbone.View.extend({

    el: '#main-page',

    template: templates.index,

    render: function () {
      Money.base = 'USD';
      Money.rates = {
        'EUR' : 0.745101, // eg. 1 USD === 0.745101 EUR
        'GBP' : 0.647710, // etc...
        'HKD' : 7.781919,
        'USD' : 1         // always include the base rate (1:1)
      };

      this.$el.html(this.template());

      _.each(Money.rates, function (rate, name) {
        var currency = new CurrencyModel({
          name: name,
          rate: rate,
          baseCurrency: this.options.baseCurrency,
          baseAmount: this.options.baseAmount
        });
        var view = new CurrencyView({
          model: currency,
          parentView: this
        });
        this.$('#currencies').append(view.render().el);
      }, this);
    }
  });
});
