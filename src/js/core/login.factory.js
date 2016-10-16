(function() {
    'use strict';

    angular
        .module('app')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function loginFactory($http, $q, CRUDFactory, apiUrl) {
        var service = CRUDFactory(apiUrl + '/owners', 'owner');

        service.isAuth = false;

        service.login = function(email, password) {
            var defer = $q.defer();

            $http.post(apiUrl + '/login', {
                email: email,
                password: password
            }).then(
                function(response) {
                    service.isAuth = true;
                    console.log(response);
                    defer.resolve(response.data);
                },
                function(error) {
                    console.log(error);
                    defer.reject(error);
                }
            );

            return defer.promise;
        };

        service.register = function(registerInfo) {
            var defer = $q.defer();

            $http.post(apiUrl + '/register', registerInfo).then(
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

        service.logout = function() {
            var defer = $q.defer();

            $http.get(apiUrl + '/login').then(
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
