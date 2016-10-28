(function() {
    'use strict';

    angular
        .module('app')
        .factory('registerFactory', registerFactory);

    registerFactory.$inject = ['$http', '$q', 'apiUrl', 'CRUDFactroy'];

    /* @ngInject */
    function registerFactory($http, $q, apiUrl, CRUDFactroy) {
        return CRUDFactroy(apiUrl + '/owners', 'register');
    }
})();