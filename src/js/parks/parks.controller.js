(function() {
    'use strict';

    angular
        .module('app')
        .controller('parksController', parksController);

    parksController.$inject = ['$state', '$stateParams', 'medicalFactory'];

    /* @ngInject */
    function parksController($state, $stateParams, medicalFactory) {
        var vm = this;
        vm.title = 'parksController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();