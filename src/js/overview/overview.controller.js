(function() {
    'use strict';

    angular
        .module('app')
        .controller('overviewController', overviewController);

    overviewController.$inject = ['$state', '$stateParams', 'overviewFactory'];

    /* @ngInject */
    function overviewController($state, $stateParams, overviewFactory) {
        var vm = this;
        vm.title = 'overviewController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();