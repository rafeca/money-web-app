define([
  'views/index',
  'template-helpers'
], function (View) {
  'use strict';

  describe('views/index tests', function () {
    it('should render the view successfully', function () {
      var view = new View({
        el: '#test-placeholder',
        baseCurrency: 'EUR',
        baseAmount: '100'
      });
      view.render();

      expect(view.$('li').length).to.equal(4);

      view.remove();
    });
  });
});
