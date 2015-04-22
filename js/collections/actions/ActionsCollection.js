define([
  'underscore',
  'backbone',
  'models/actions/ActionsModel'
], function(_, Backbone, ActionsModel){
  var ActionsCollection = Backbone.Collection.extend({
    model: ActionsModel,
    url: '/api/actions/'
  });
  return ActionsCollection;
});