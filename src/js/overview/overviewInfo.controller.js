(function() {
    'use strict';

    angular
        .module('app')
        .controller('overviewInfoController', overviewInfoController);

    overviewInfoController.$inject = ['$state', '$stateParams', 'overviewFactory'];

    /* @ngInject */
    function overviewInfoController($state, $stateParams, overviewFactory) {
        var vm = this;
        vm.title = 'overviewInfoController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();