(function() {
    'use strict';

    angular
        .module('app')
        .controller('extraController', extraController);

    extraController.$inject = ['$http', '$q', 'CRUDFactory', 'apiUrl'];

    /* @ngInject */
    function extraController($http, $q, CRUDFactory, apiUrl) {
       return CRUDFactory(apiUrl + '/extra', 'extras');
    }
})();