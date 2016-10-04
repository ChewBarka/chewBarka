(function() {
    'use strict';

    angular
        .module('app')
        .factory('CRUDFactory', CRUDFactory);

    CRUDFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function CRUDFactory($http, $q) {
    	return function(endpoint, entityName) {
        var service = {
            getAll: getAll,
            getById: getById,
            add: add,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function getAll() {
        	var deferred = $q.defer();

        	$http.get(endpoint)
        		.success(function(data) {
        			deferred.resolve(data);
        		})
        		.error(function(error) {
        			console.log(error);
        			deferred.reject('There was a problem fetching ' + entityName.toLowerCase() + 's. ');
        		});

        		return deferred.promise;

        }
        function getById(id) {
        	var deferred = $q.defer();

        	$http.getById(endpoint + '/' + id)
        		.success(function(data) {
        			deferred.resolve(data);
        		})
        		.error(function(error) {
        			console.log(error);
        			deferred.reject('There was a problem fetching ' + entityName.toLowerCase() + '.');
        		});

        		return deferred.promise;
        }
        function add(entity) {
        	var deferred = $q.defer();

        	$http.post(endpoint, entity)
        		.success(function(data) {
        			deferred.resolve(data);
        		})
        		.error(function(error) {
        			console.log(error);
        			deferreed.reject('There was a problem posting ' + entityName.toLowerCase() + '.');
        		});

        		return deferred.promise;
        }
        function remove(id) {
        	var deferred = $q.defer();

        	$http.delete(endpoint + '/' + id)
        	.success(function(data) {
        		deferred.resolve(data);
        	})
        	.error(function(error) {
        		console.log(error);
        		deferred.reject('There was a problem removing ' + entityName.toLowerCase() + '.');
        	});

        	return deferred.promise;
        }
        function update(entity, id) {
        	var deferred = $q.defer();

        	$http.put(endpoint + '/' + id, entity)
        	.success(function(data) {
        		deferred.resolve(data);
        	})
        	.error(function(error) {
        		console.log(error);
        		deferred.reject('There was a problem updating ' + entityName.toLowerCase() + '.');
        	});

        	return deferred.promise;
        }
    };
    }
})();