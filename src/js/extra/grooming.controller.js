(function() {
    'use strict';

    angular
        .module('app')
        .controller('linkGroomingController', linkGroomingController);

    linkGroomingController.$inject = ['$state', '$stateParmas', 'groomingFactory'];

    /* @ngInject */
    function linkGroomingController($state, $stateParmas, groomingFactory) {
        var vm = this;
        vm.title = 'linkGroomingController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();