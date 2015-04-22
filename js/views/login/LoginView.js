
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/login/loginTemplate.html'
], function($, _, Backbone, loginTemplate){

  var LoginView = Backbone.View.extend({
    el: $("#main"),

    initialize:function () {},
    events: {
      "click #loginBtn": "login"
    },
    render:function () {
      this.$el.html(loginTemplate); 
      return this;
    },
    login:function (event) {
      event.preventDefault();
      var formValues = {
          uid: $("input[name='uid']").val(),
          password: $("input[name='password']").val()
      };
      $.ajax({
          url: API.login,
          type:'POST',
          dataType:"json",
          data: formValues,
          success:function (response) {
            if(!response.status) {
              console.log(["Login Fail!!!"]);
            }
            else {
              //save cookie
              var d = new Date();
              var exday = 30;
              d.setTime(d.getTime() + (exday*24*60*60*1000));
              var expires = "expires="+d.toUTCString();
              document.cookie ="daily_report=" + response.user_id + "; " + expires;
              //redirect Dashboard
              window.location.replace('#dashboard');
            }
          }
      });
    }

  });

  return LoginView;
  
});
