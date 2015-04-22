define([
  'jquery',
  'underscore',
  'backbone',
  'models/users/UsersModel',
  'collections/users/UsersCollection',
  'text!templates/users/usersTemplate.html'
], function($, _, Backbone, UsersModel, UsersCollection, usersTemplate){
  var UsersView = Backbone.View.extend({
    el: '#user',
    initialize: function() {
      _.bindAll(this, "render"); // make sure 'this' refers to this View in the success callback below
      this.collection.fetch({ // call fetch() with the following options
        success: this.render // $.ajax 'success' callback
      });
    },
    render: function(){
      var data = {
        users: this.collection.models,
        _: _
      };
      var temp = _.template( usersTemplate);
      this.$el.html(temp(data));
    }
  });
  return UsersView;
});