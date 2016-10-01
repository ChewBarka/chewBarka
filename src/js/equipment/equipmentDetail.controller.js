(function() {
    'use strict';

    angular
        .module('app')
        .controller('equipmentDetailController', equipmentDetailController);

    equipmentDetailController.$inject = ['$state', '$stateParams', 'equipmentFactory'];

    /* @ngInject */
    function equipmentDetailController($state, $stateParams, equipmentFactory) {
        var vm = this;
        vm.title = 'equipmentDetailController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();