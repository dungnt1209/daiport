
define([
  'jquery',
  'underscore',
  'backbone',
  'chart',
  'views/login/LoginView',
  'views/dashboards/DashboardsView',
  'views/tasks/TasksListView',
  'views/tasks/TaskView',
  'views/tasks/NewTaskView'
], function($, _, Backbone, Chart, LoginView, DashboardsView, TasksListView, TasksView, NewTasksView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'dashboard' : 'showDashboard',
      'tasks'     : 'showTasks',
      'newtask'   : 'newTask',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    // app_router.on('route:showLogin', function(){
   
        // Call render on the module we loaded in via the dependency array
    //     var projectsView = new ProjectsView();
    //     projectsView.render();

    // });

    app_router.on('route:showDashboard', function () {
        var dashboardView = new DashboardsView();
        dashboardView.render();
    });

    app_router.on('route:showTasks', function () {
      var task_view = new TasksView();
      task_view.render();
    });

    app_router.on('route:newTask', function () {
      var new_task_view = new NewTasksView();
      new_task_view.render();
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var loginView = new LoginView();
        loginView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    // var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
