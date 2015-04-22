define([
  'underscore',
  'backbone',
  'models/tasks/TasksModel'
], function(_, Backbone, TasksModel){
  var TasksCollection = Backbone.Collection.extend({
    model: TasksModel,
    url: '/api/tasks/'
  });
  return TasksCollection;
});