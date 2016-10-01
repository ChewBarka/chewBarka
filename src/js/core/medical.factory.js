(function() {
    'use strict';

    angular
        .module('app')
        .factory('medicalFactory', medicalFactory);

    medicalFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function medicalFactory($http, $q, CRUDFactory, apiUrl) {
        return CRUDFactory(apiUrl + '/medical', 'medicals');
    }
})();