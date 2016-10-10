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
        vm.next = next;
        vm.owner = '';
        

        ////////////////

        
        function next() {
        	vm.ownerId = $stateParams._id;
        	console.log('This works');
        	console.log(vm.ownerId);
        }
    }
})();