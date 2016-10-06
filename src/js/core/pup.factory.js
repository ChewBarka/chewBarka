(function() {
    'use strict';

    angular
        .module('app')
        .factory('pupFactory', pupFactory);

    pupFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function pupFactory($http, $q, CRUDFactory, apiUrl) {
        return CRUDFactory(apiUrl + '/pups', 'pup');
    }
})();