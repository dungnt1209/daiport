define([
  'jquery',
  'underscore',
  'backbone',
  'models/dashboards/DashboardsModel',
  'collections/dashboards/DashboardsCollection',
  'views/dashboards/ChartView',
  'models/users/UsersModel',
  'collections/users/UsersCollection',
  'views/users/UsersView',
  'text!templates/dashboards/dashboardsTemplate.html'
], function($, _, Backbone, DashboardsModel, DashboardsCollection, ChartView, UsersModel, UsersCollection, UsersView, dashboardsTemplate){
  var api = '/api/reports/time/';
  var DashboardsView = Backbone.View.extend({
    el: $("#main"),
    events: {
      'click #btn-filter' : 'toggleFilter',
      'click #btn-send' : 'getFilter'
    },
    render: function(){
      this.$el.html(dashboardsTemplate);
      this.showChart();
      /*Get list user*/
      var user_collection = new UsersCollection();
      var user_view = new UsersView({collection: user_collection});
    },
    getFilter: function(event){
      $('#btn-send').attr('disabled','disabled');
      var username = $('[name="username"]').val();
      var datetime = $('[name="datetime"]').val();
      api = '/api/reports/time/' + this.buildUrl({user_id: username, time: datetime});
      this.showChart();
      event.preventDefault();
    },
    buildUrl: function(obj){
      var params = [];
      _.each( obj, function( key, value ) {
        params.push(value+ '=' + key)
      });
      return '?'+ params.join('&');
    },
    showChart: function(){
      var chart_collection = new DashboardsCollection();
      chart_collection.url = api;
      var chart_view = new ChartView({collection: chart_collection});
      $('#btn-send').removeAttr('disabled');
    }
  });
  return DashboardsView;
});
