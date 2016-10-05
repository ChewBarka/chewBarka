(function() {
    'use strict';

    angular
        .module('app')
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function loginFactory($http, $q, CRUDFactory, apiUrl) {
        return CRUDFactory(apiUrl + '/owners', 'owner');
    }
})();