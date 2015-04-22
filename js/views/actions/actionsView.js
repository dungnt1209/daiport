define([
  'jquery',
  'underscore',
  'backbone',
  'models/actions/ActionsModel',
  'collections/actions/ActionsCollection',
  'text!templates/actions/actionsTemplate.html'
], function($, _, Backbone, ActionsModel, ActionsCollection, actionsTemplate){
  var ActionListView = Backbone.View.extend({
    el: '.actions',
    initialize: function() {
      _.bindAll(this, "render"); // make sure 'this' refers to this View in the success callback below
      this.collection.fetch({ // call fetch() with the following options
        success: this.render // $.ajax 'success' callback
      });
    },
    render: function(){
      var data = {
        actions: this.collection.models,
        _: _
      };
      var temp = _.template( actionsTemplate);
      this.$el.html(temp(data));
    }
  });
  return ActionListView;
});