define([
  'underscore',
  'backbone',
  'models/dashboards/DashboardsModel'
], function(_, Backbone, DashboardsModel){
  var DashboardsCollection = Backbone.Collection.extend({
    model: DashboardsModel,
    url : '/api/reports/time/'
  });
  return DashboardsCollection;
});
