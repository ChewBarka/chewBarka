(function() {
    'use strict';

    angular
        .module('app')
        .controller('linksController', linksController);

    linksController.$inject = ['$state', '$stateParams', 'linksFactory'];

    /* @ngInject */
    function linksController($state, $stateParams, linksFactory) {
        var vm = this;
        vm.title = 'linksController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();