define([
  'backbone',
  'zeptojs',
  'money',
  'models/currency'
], function (Backbone, $, Money, Currency) {
  'use strict';

  var APP_ID = 'ac55477b14b64893acc38a9e10652ca1';

  var cachedRates = {
    'EUR' : 0.745101,
    'GBP' : 0.647710,
    'HKD' : 7.781919,
    'USD' : 1
  };
  var cachedBase = 'USD';
  //var lastUpdated = null;

  return new Backbone.Collection.extend({
    model: Currency,
    url: 'http://openexchangerates.org/api/latest.json?app_id=' + APP_ID,

    updateRates: function () {
      $.getJSON(
        'http://openexchangerates.org/api/latest.json?app_id=' + APP_ID,
        function (data) {
          cachedRates = Money.rates = data.rates;
          cachedBase = Money.base = data.base;
        }
      );
    },

    parse: function (data) {
      return data.rates;
    }
  });
});
