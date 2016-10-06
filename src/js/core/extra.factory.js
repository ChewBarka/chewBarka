(function() {
    'use strict';

    angular
        .module('app')
        .factory('extraFactory', extraFactory);

    extraFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function extraFactory($http, $q, CRUDFactory, apiUrl) {
       return CRUDFactory(apiUrl + '/extra', 'extras');
    }
})();