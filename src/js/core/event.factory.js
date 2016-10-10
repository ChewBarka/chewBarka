(function() {
    'use strict';

    angular
        .module('app')
        .factory('eventsFactory', eventsFactory);

    eventsFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiEventful'];

    /* @ngInject */
    function eventsFactory($http, $q, CRUDFactory, apiEventful) {
    	return CRUDFactory(apiEventful);
    }
})();