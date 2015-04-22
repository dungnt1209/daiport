
/*===== API configuration =====*/
var rootAPI = 'http://didaunhi.com/daily-report/api/';
API = {
	login : rootAPI+'login/',
	reports : {
		time : rootAPI+'reports/time/'
	}
}

/*===== helper classes =====*/

utils = {

	/* append params to URL */
	buildUrl: function(obj){
      var params = [];
      _.each( obj, function( key, value ) {
        params.push(value+ '=' + key)
      });
      return '?'+ params.join('&');
    }

}

