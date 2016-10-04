(function() {
    'use strict';

    angular
        .module('app')
        .controller('medicalController', medicalController);

    medicalController.$inject = ['$state','$stateParams', 'medicalFactory'];

    /* @ngInject */
    function medicalController($state,$stateParams, medicalFactory) {
        var vm = this;
        vm.title = 'medicalController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();