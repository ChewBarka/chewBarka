(function() {
    'use strict';

    angular
        .module('app')
        .factory('eventsFactory', eventsFactory);

    eventsFactory.$inject = ['$http', '$q', 'apiEventful'];

    /* @ngInject */
    function eventsFactory($http, $q, apiEventful) {
        var service = {
            getAll: getAll
        };
        return service;

        ////////////////

        function getAll(city) {
        	var defer = $q.defer();
        	console.log(city);
        	$http.get(apiEventful + '&keywords=dogs+events&location=' + city)
        	.then(
        		function(response) {
        			defer.resolve(response.data);
        		},
        		function(error) {
        			defer.reject(error);
        		}
        	);
        	return defer.promise;
        }
        
    }
})();