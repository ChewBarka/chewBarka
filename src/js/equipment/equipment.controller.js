(function() {
    'use strict';

    angular
        .module('app')
        .controller('equipmentController', equipmentController);

    equipmentController.$inject = ['$state', '$stateParams', 'equipmentFactory'];

    /* @ngInject */
    function equipmentController($state, $stateParams, equipmentFactory) {
        var vm = this;
        vm.title = 'equipmentController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();