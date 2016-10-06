(function() {
    'use strict';

    angular
        .module('app')
        .factory('overviewFactory', overviewFactory);

    overviewFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function overviewFactory($http, $q, CRUDFactory, apiUrl) {
        var service = CRUDFactory(apiUrl + '/owners', 'owner');

///////////////////////////////////////////////////////////////////////
        service.addPet = function(ownerId, pet) {
        	var defer = $q.defer();

        	// /owners/1/pet
        	var url = apiUrl + '/owners/' + ownerId + '/pet';
        	
        	$http.post(url, pet).then(
        		function(response) {
        			defer.resolve(response.data);
        		},
        		function(error) {
        			console.log(error);
        			defer.reject(error);
        		}
    		);

        	return defer.promise;	
        };
///////////////////////////////////////////////////////////////////////
		service.addTodo = function(ownerId, todo) {
        	var defer = $q.defer();

        	// /owners/1/pet
        	var url = apiUrl + '/owners/' + ownerId + '/todo';
        	
        	$http.post(url, todo).then(
        		function(response) {
        			defer.resolve(response.data);
        		},
        		function(error) {
        			console.log(error);
        			defer.reject(error);
        		}
    		);

        	return defer.promise;	
        };

        return service;
    }
})();