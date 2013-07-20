define([
  'backbone',
  'views/home'
], function (Backbone, HomeView) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      '*path': 'home'
    },

    home: function () {
      var homeView = new HomeView();
      homeView.render();
    }
  });

  return Router;
});
