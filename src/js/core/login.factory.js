(function() {
    'use strict';

    angular
        .module('app')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl', 'localStorageService', 'toastr'];

    /* @ngInject */
    function loginFactory($http, $q, CRUDFactory, apiUrl, localStorageService, toastr) {
        var service = CRUDFactory(apiUrl + '/owners', 'owner');

        service.isAuth = false;

        service.initialize = function() {
            var authData = localStorageService.get('authData');

            if(authData && authData.access_token) {
                service.isAuth = true;
                service.ownerId = authData.owner_id;
            }
        };

        service.login = function(email, password) {
            var defer = $q.defer();

            $http.post(apiUrl + '/login', {
                email: email,
                password: password
            }).then(
                function(response) {
                    localStorageService.set('authData', response.data);
                    service.isAuth = true;
                    service.ownerId = response.data.owner_id;
                    console.log(response);
                    defer.resolve(response.data);
                    toastr.success("logged in");
                },  
                function(error) {
                    defer.reject(error);
                    toastr.error("Wrong Email or Password!");
                }
            );

            return defer.promise;
        };

        service.register = function(registerInfo) {
            var defer = $q.defer();

            $http.post(apiUrl + '/register', registerInfo).then(
                function(response) {
                    defer.resolve(response.data);
                    toastr.success("You have been registered!");
                },
                function(error) {
                    defer.reject(error);
                     toastr.error("Passwords must Match!");
                }
            );

            return defer.promise;
        };

        service.logout = function() {
            localStorageService.remove('authData');
        };

        return service;
    }
})();
