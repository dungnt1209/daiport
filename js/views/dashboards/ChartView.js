define([
  'jquery',
  'underscore',
  'backbone',
  'models/dashboards/DashboardsModel',
  'collections/dashboards/DashboardsCollection',
  'text!templates/dashboards/chartTemplate.html'
], function($, _, Backbone, DashboardModel, DashboardsCollection, chartTemplate){
  var CharView = Backbone.View.extend({
    el: '#chart',
    initialize: function() {
      _.bindAll(this, "render"); // make sure 'this' refers to this View in the success callback below
      this.collection.fetch({ // call fetch() with the following options
        success: this.render,
        error: function(){
          $('#chart').html('No data...');
        }
      });
    },
    render: function(){
      var data = {
        charts: this.collection.models,
        _: _
      };
      var temp = _.template(chartTemplate);
      this.$el.html(temp(data));
      return this;
    }
  });
  return CharView;
});
