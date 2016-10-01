(function() {
    'use strict';

    angular
        .module('app')
        .controller('parksForDogsController', parksForDogsController);

    parksForDogsController.$inject = ['$state', '$stateParams', 'medicalFactory'];

    /* @ngInject */
    function parksForDogsController($state, $stateParams, medicalFactory) {
        var vm = this;
        vm.title = 'parksForDogsController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();