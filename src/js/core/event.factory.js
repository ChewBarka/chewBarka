(function() {
    'use strict';

    angular
        .module('app')
        .factory('eventsFactory', eventsFactory);

    eventsFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function eventsFactory($http, $q, CRUDFactory, apiUrl) {
    	return CRUDFactory(apiUrl + '/events', 'event');
    }
})();