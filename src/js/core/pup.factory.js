(function() {
    'use strict';

    angular
        .module('app')
        .factory('pupFactory', pupFactory);

    pupFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function pupFactory($http, $q, CRUDFactory, apiUrl) {
        var service = CRUDFactory(apiUrl + '/pups', 'pup');

///////////////////////////////////////////////////////////////////////
        service.addMedical = function(pupId, medical) {
        	var defer = $q.defer();

        	// /pup/1/medical
        	var url = apiUrl + '/pups/' + pupId + '/medical';
        	
        	$http.post(url, medical).then(
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
        service.addFitness = function(pupId, fitness) {
            var defer = $q.defer();

            // /pup/1/fitness
            var url = apiUrl + '/pups/' + pupId + '/fitness';
            
            $http.post(url, fitness).then(
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