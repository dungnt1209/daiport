define([
  'underscore',
  'backbone',
  'models/users/UsersModel'
], function(_, Backbone, UsersModel){
  var UsersCollection = Backbone.Collection.extend({
    model: UsersModel,
    url: '/api/users/'
  });
  return UsersCollection;
});