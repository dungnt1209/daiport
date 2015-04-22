define([
  'jquery',
  'underscore',
  'backbone',
  'models/projects/ProjectsModel',
  'collections/projects/ProjectsCollection',
  'text!templates/projects/projectsTemplate.html'
], function($, _, Backbone, ProjectsModel, ProjectsCollection, projectsTemplate){
  var ProjectListView = Backbone.View.extend({
    el: '.projects',
    initialize: function() {
      _.bindAll(this, "render"); // make sure 'this' refers to this View in the success callback below
      this.collection.fetch({ // call fetch() with the following options
        success: this.render // $.ajax 'success' callback
      });
    },
    render: function(){
      var data = {
        projects: this.collection.models,
        _: _
      };
      var temp = _.template( projectsTemplate);
      this.$el.html(temp(data));
    }
  });
  return ProjectListView;
});