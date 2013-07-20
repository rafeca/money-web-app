define([
  'backbone',
  'zeptojs',
  'templates'
], function (Backbone, $, templates) {
  'use strict';

  return Backbone.View.extend({

    template: templates.currency,

    tagName: 'li',

    events: {
      'click *': 'changeCurrency'
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    changeCurrency: function () {
      this.options.parentView.options.parentView.changeCurrency(
        this.model.get('name')
      );
    }
  });
});
