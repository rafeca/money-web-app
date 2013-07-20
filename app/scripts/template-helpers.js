define([
  'handlebars',
  'underscore'
], function (Handlebars, _) {
  'use strict';

  var helpers = {
    round: function (num) {
      return Math.round(num * 100) / 100;
    }
  };

  // Register all the helpers
  _.each(helpers, function (helper, name) {
    Handlebars.registerHelper(name, helper);
  });
});
