define([
  'underscore',
  'backbone',
  'models/projects/ProjectsModel'
], function(_, Backbone, ProjectsModel){
  var ProjectsCollection = Backbone.Collection.extend({
    model: ProjectsModel,
    url: '/api/projects/'
  });
  return ProjectsCollection;
});