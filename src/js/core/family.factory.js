(function() {
    'use strict';

    angular
        .module('app')
        .factory('familyFactory', familyFactory);

    familyFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function familyFactory($http, $q, CRUDFactory, apiUrl) {
        return CRUDFactory(apiUrl + '/family', 'family');
    }
})();