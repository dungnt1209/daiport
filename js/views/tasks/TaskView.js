define([
  'jquery',
  'underscore',
  'backbone',
  'models/tasks/TasksModel',
  'collections/tasks/TasksCollection',
  'views/tasks/TasksListView',
  'models/users/UsersModel',
  'collections/users/UsersCollection',
  'views/users/UsersView',
  'text!templates/tasks/tasksTemplate.html'
], function($, _, Backbone, TasksModel, TasksCollection, TasksListView, UsersModel, UsersCollection, UsersView, tasksTemplate){
  var api = '/api/tasks/';
  var TasksView = Backbone.View.extend({
    el: $("#main"),
    events: {
      'click #btn-filter' : 'toggleFilter',
      'click #btn-send' : 'getFilter'
    },
    render: function(){
      this.$el.html(tasksTemplate);
      /*Get list user*/
      var user_collection = new UsersCollection();
      var user_view = new UsersView({collection: user_collection});
      /*Get list task*/
      this.showTask();
    },
    toggleFilter: function(event){
      $('#btn-filter').parent('.box-filter').toggleClass('show');
      event.preventDefault();
    },
    getFilter: function(event){
      $('#btn-send').attr('disabled','disabled');
      var username = $('[name="username"]').val();
      var datetime = $('[name="datetime"]').val();
      api = '/api/tasks/' + this.buildUrl({user_id: username, time: datetime});
      this.showTask();
      event.preventDefault();
    },
    buildUrl: function(obj){
      var params = [];
      _.each( obj, function( key, value ) {
        params.push(value+ '=' + key)
      });
      return '?'+ params.join('&');
    },
    showTask: function(){
      var task_collection = new TasksCollection();
      task_collection.url = api;
      var task_list_view = new TasksListView({collection: task_collection});
      $('#btn-send').removeAttr('disabled');
    }
  });
  return TasksView;
});