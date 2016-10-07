(function() {
    'use strict';

    angular
        .module('app')
        .controller('eventsController', eventsController);

    eventsController.$inject = ['$state', '$stateParams', 'eventsFactory'];

    /* @ngInject */
    function eventsController($state, $stateParams, eventsFactory) {
        var vm = this;
        vm.title = 'eventController';

        get();

        ////////////////

        function get() {
        }
    }
})();