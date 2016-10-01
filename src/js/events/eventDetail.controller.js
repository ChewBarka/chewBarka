(function() {
    'use strict';

    angular
        .module('app')
        .controller('eventDetailController', eventDetailController);

    eventDetailController.$inject = ['$state', '$stateParams', 'eventFactory'];

    /* @ngInject */
    function eventDetailController($state, $stateParams, eventFactory) {
        var vm = this;
        vm.title = 'eventDetailController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();