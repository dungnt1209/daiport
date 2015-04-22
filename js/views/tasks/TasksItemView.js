define([
  'jquery',
  'underscore',
  'backbone',
  'views/tasks/TasksItemView',
  'text!templates/tasks/tasksItemTemplate.html'
], function($, _, Backbone, tasksItemView, tasksItemTemplate){

  var TasksItemView = Backbone.View.extend({
    el: $("#taskList"),

    render: function(){
      
      // $('.menu li').removeClass('active');
      // $('.menu li a[href="#"]').parent().addClass('active');
      // this.$el.html(tasksListTemplate);

      var data = {
        title : 'titltltutle',
        _: _ 
      };
      
      var cbTemplate = _.template(tasksItemTemplate);
      $("#taskList").html( cbTemplate(data) ); 
 
    }

  });

  return TasksItemView;
  
});
