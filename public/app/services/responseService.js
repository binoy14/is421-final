angular.module('responseService', [])

.factory('Response', function($http) {
	var responseFactory = {};

	responseFactory.get = function(id) {
		return $http.get('/api/responses/' + id);
	};

	responseFactory.post = function() {
		return $http.post('/api/responses/' + id, formData);
	};

	return responseFactory;
})