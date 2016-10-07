(function() {
    'use strict';

    angular
        .module('app')
        .controller('navController', navController);

    navController.$inject = ['$state', '$stateParams'];

    /* @ngInject */
    function navController($state, $stateParams) {
        var vm = this;
        vm.title = 'navController';

        vm.ownerId = "";
        vm.passId = passId;


        ////////////////

        function passId() {
        	vm.ownerId = $stateParams._id;
        	console.log(vm.ownerId);
        }
    }
})();