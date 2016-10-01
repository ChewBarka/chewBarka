(function() {
    'use strict';

    angular
        .module('app')
        .factory('equipmentFactory', equipmentFactory);

    equipmentFactory.$inject = ['$http', '$q', 'apiUrl', 'CRUDFactory'];

    /* @ngInject */
    function equipmentFactory($http, $q, apiUrl, CRUDFactory) {
        return CRUDFactory(apiUrl + '/equipment', 'equipment');
    }
})();