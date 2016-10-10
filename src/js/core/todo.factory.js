(function() {
    'use strict';

    angular
        .module('app')
        .factory('todoFactory', todoFactory);

    todoFactory.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function todoFactory($http, $q, CRUDFactory, apiUrl) {
        return CRUDFactory(apiUrl + '/todo', 'todo');
    }
})();