(function() {
    'use strict';

    angular
        .module('app')
        .factory('linksFactory', linksFactory);

    linksFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function linksFactory($http, $q, CRUDFactory, apiUrl) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();