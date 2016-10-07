(function() {
    'use strict';

    angular
        .module('app')
        .controller('aboutController', aboutController);

    aboutController.$inject = ['$stateParams', '$state'];

    /* @ngInject */
    function aboutController($stateParams, $state) {
        var vm = this;
        vm.title = 'aboutController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();