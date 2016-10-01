(function() {
    'use strict';

    angular
        .module('app')
        .factory('overviewFactory', overviewFactory);

    overviewFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function overviewFactory($http, $q, CRUDFactory, apiUrl) {
        return CRUDFactory(apiUrl + '/overview', 'overviews');
    }
})();