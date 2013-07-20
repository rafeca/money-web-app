require.config({
  baseUrl: 'scripts/',
  paths: {
    zeptojs: '../components/zepto/zepto',
    underscore: '../components/underscore/underscore',
    backbone: '../components/backbone/backbone',
    handlebars: '../components/handlebars.js/dist/handlebars.runtime',
    money: '../components/money/money'
  },
  shim: {
    'zeptojs': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'zeptojs'],
      exports: 'Backbone'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'money': {
      exports: 'fx'
    }
  }
});
