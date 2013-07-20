define([
  'backbone',
  'router',
  'views/home'
], function (Backbone, Router, HomeView) {
  'use strict';

  describe('router tests', function () {
    beforeEach(function () {
      this.router = new Router();
    });

    it('should render Index when loading empty path', function () {
      var viewMock = sinon.mock(HomeView.prototype);
      viewMock.expects('render').once();

      Backbone.history.loadUrl('');

      viewMock.verify();
    });

    it('should render Index when loading any random URL', function () {
      var viewMock = sinon.mock(HomeView.prototype);
      viewMock.expects('render').once();

      Backbone.history.loadUrl('random-404-url');

      viewMock.verify();
    });
  });
});
