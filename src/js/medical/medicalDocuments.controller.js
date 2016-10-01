(function() {
    'use strict';

    angular
        .module('app')
        .controller('medicalDocumentsController', medicalDocumentsController);

    medicalDocumentsController.$inject = ['$state','$stateParams', 'medicalFactory'];

    /* @ngInject */
    function medicalDocumentsController($state,$stateParams, medicalFactory) {
        var vm = this;
        vm.title = 'medicalDocumentsController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();