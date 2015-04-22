define([
  'jquery',
  'underscore',
  'backbone',
  'models/tasks/TasksModel',
  'collections/tasks/TasksCollection',
  'text!templates/tasks/tasksListTemplate.html'
], function($, _, Backbone, TasksModel, TasksCollection, tasksListTemplate){
  var TaskListView = Backbone.View.extend({
    el: '#data',
    initialize: function() {
      _.bindAll(this, "render"); // make sure 'this' refers to this View in the success callback below
      this.collection.fetch({ // call fetch() with the following options
        success: this.render,
        error: function(){
          $('#data').html('<td colspan="2">No data...</td>');
        }
      });
    },
    render: function(){
      var data = {
        lists: this.collection.models,
        _: _
      };
      var temp = _.template( tasksListTemplate);
      this.$el.html(temp(data));
      return this;
    }
  });
  return TaskListView;
});