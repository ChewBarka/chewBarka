(function() {
    'use strict';

    angular
        .module('app')
        .factory('fitnessFactory', fitnessFactory);

    fitnessFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function fitnessFactory($http, $q, CRUDFactory, apiUrl) {
        return CRUDFactory(apiUrl + '/fitness', 'fitness');
    }
})();