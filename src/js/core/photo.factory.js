(function() {
    'use strict';

    angular
        .module('app')
        .factory('photoFactory', photoFactory);

    photoFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function photoFactory($http, $q, CRUDFactory, apiUrl) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();