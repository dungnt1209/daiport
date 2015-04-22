define([
  'jquery',
  'underscore',
  'backbone',
  'datetimepicker',
  'common',
  'models/tasks/TasksModel',
  'collections/tasks/TasksCollection',
  'collections/projects/ProjectsCollection',
  'collections/actions/ActionsCollection',
  'views/projects/projectsView',
  'views/actions/actionsView',
  'text!templates/tasks/new_tasksTemplate.html'
], function($, _, Backbone, Datetimepicker, Common, TaskModel, TaskCollection, ProjectsCollection, ActionsCollection, ProjectsView, ActionsView, new_tasksTemplate){
  var NewTasksView = Backbone.View.extend({
    el: $("#main"),
    render: function(){
      this.$el.html(new_tasksTemplate);

      /*Lay danh sach projects*/
      var projectList = new ProjectsCollection();
      var projectView = new ProjectsView({collection: projectList});
      /*Lay danh sach actions*/
      var actionList = new ActionsCollection();
      var actionView = new ActionsView({collection: actionList});
      console.log(utils);
      // fill time data for combobox
      utils.buildCombobox($("#chInHour"), utils.getHours());
      utils.buildCombobox($("#chInMins"), utils.getMins());
      utils.buildCombobox($("#chOutHour"), utils.getHours());
      utils.buildCombobox($("#chOutMins"), utils.getMins());
      utils.buildCombobox($("#restHour"), utils.getHours());
      utils.buildCombobox($("#restMins"), utils.getMins());

      // // apply event to submit form by Ajax
      // $('#btnSubmit').on('click', function() {
      //   $.post(
      //     apiUrl+'/dailies',
      //     utils.serializeObject($('#frmTask'))
      //   );
      //   console.log(utils.serializeObject($('#frmTask')));
      // })

    }
  });
  return NewTasksView;
});