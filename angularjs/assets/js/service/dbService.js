'use strict';
app.factory('dbServices', ['$http','$rootScope', function($http,$rootScope){
	var systemurl = 'http://192.168.1.104/hospital/';

	return {
		adddata: function(jsondata) {
			var $promise = $http.post('https://tekdi-challenges.appspot.com/api/People',jsondata);
			return $promise;
		},
		getdata: function(jsondata) { 
			
			var $promise = $http.get('https://tekdi-challenges.appspot.com/api/People');
			//var $promise = $http.get('http://localhost/tekdiphp1assignment/');
			return $promise;
		},
		getpersondata: function(jsondata) { 
			var url = "https://tekdi-challenges.appspot.com/api/People/"+jsondata;
			var $promise = $http.get(url);
			return $promise;
		},
		updatedata: function(jsondata,id) { 
			//https://tekdi-challenges.appspot.com/api/People/2
			var url = "https://tekdi-challenges.appspot.com/api/People/"+id;
			var $promise = $http.get(url,jsondata);
			return $promise;
		}
	};
}]);