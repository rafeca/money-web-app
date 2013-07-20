define([
  'backbone',
  'zeptojs',
  'underscore',
  'templates',
  'views/index'
], function (Backbone, $, _, templates, IndexView) {
  'use strict';

  return Backbone.View.extend({

    el: '#amount-selector',

    template: templates.home,

    indexView: null,

    baseCurrency: localStorage.getItem('baseCurrency') || 'EUR',

    baseAmount: localStorage.getItem('baseAmount') || null,

    events: {
      'keydown .amount input': 'handleKeyPress'
    },

    render: function () {
      this.$el.html(this.template({
        baseAmount: this.baseAmount,
        baseCurrency: this.baseCurrency
      }));

      if (this.$('.amount input').val()) {
        this.$('.amount input').addClass('typing');
      }

      if (!this.launched) {
        this.launched = true;
        // focus place the cursor at the end of the input
        this.$('.amount input').focus()[0].setSelectionRange(
          this.baseAmount.length, this.baseAmount.length
        );
      }

      if (this.baseAmount) {
        var indexView = new IndexView({
          baseAmount: this.baseAmount,
          baseCurrency: this.baseCurrency,
          parentView: this
        });
        indexView.render();
      }
    },

    handleKeyPress: function (event) {
      var $this = $(event.target);
      if (event.keyCode === 8) {
        if ($this.val().length === 1) {
          $this.removeClass('typing');
        }
        return true;
      }

      if (event.keyCode === 13) {
        this.baseAmount = $this.val();
        localStorage.setItem('baseAmount', $this.val());
        this.render();
        this.$el.addClass('collapsed');
        return true;
      }

      if (event.keyCode >= 48 && event.keyCode <= 57) {
        if (!$this.val()) {
          $this.addClass('typing');
        }
        return true;
      }

      if (!event.charCode) {
        return true;
      }
      return false;
    },

    changeCurrency: function (currency) {
      this.baseCurrency = currency;
      localStorage.setItem('baseCurrency', currency);
      this.render();
    }
  });
});