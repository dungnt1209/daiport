
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'common' // Request common.js
], function($, _, Backbone, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };
  return {
    initialize: initialize
  };
});