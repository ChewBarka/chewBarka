(function() {
    'use strict';

    angular
        .module('app')
        .controller('parksController', parksController);

    parksController.$inject = ['$state', '$stateParams'];

    /* @ngInject */
    function parksController($state, $stateParams) {
        var vm = this;
        vm.title = 'parksController';

        activate();
        
        ////////////////

        function activate() {
        }

    }
})();