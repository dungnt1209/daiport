define([
  'jquery',
  'underscore',
  'backbone',
  'models/dashboard/DashboardModel',
  'collections/dashboards/DashboardsCollection',
  'models/users/UsersModel',
  'collections/users/UsersCollection',
  'views/users/UsersView',
  'text!templates/dashboards/dashboardsTemplate.html'
], function($, _, Backbone, DashboardModel, DashboardsCollection, UsersModel, UsersCollection, UsersView, DashboardsTemplate){

  var api = '/api/reports/time/';
  var DashboardsView = Backbone.View.extend({
    el: $("#main"),
    events: {
      "click #user.option" : "filter_user",//filter user
      "click #time.option" : "filter_time"//filter time
    },
    initialize: function() {
      _.bindAll(this, "render"); // make sure 'this' refers to this View in the success callback below
      this.collection.fetch({ // call fetch() with the following options
        success: this.render,
        error: function(){
          //$('#main').html('No data...');
        }
      });
    },
    render: function(){
      var dashboard_collection = new DashboardsCollection();
      dashboard_collection.url = api;
      var tmp = dashboard_collection.models;
      var data = {
        param: tmp
      };
      var temp = _.template( DashboardsTemplate);
      this.$el.html(temp(data));
      var waittime = tmp[0].get('wait_time');
      var worktime = tmp[0].get('work_time');
      var pieData = [{
        value: waittime,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Waittime"
      },
        {
          value: worktime,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Worktime"
        }
      ];
      var canvas = this.$el.find("#chart-area").get(0);
      var ctx = canvas.getContext("2d");
      window.myPie = new Chart(ctx).Pie(pieData);
      /*Lay danh sach user*/
      var user_collection = new UsersCollection();
      var user_view = new UsersView({collection: user_collection});
    },
    filter_user: function() {
      var user_id = $(this).val();
      var new_url = url+"/?user_id="+user_id;
      //re_fetch data + re draw chart:

    },
    filter_time: function() {

    }
  });

  return DashboardsView;
});