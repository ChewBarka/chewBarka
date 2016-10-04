(function() {
    'use strict';

    angular
        .module('app')
        .controller('eventsController', eventsController);

    eventsController.$inject = ['$state', '$stateParams', 'eventFactory'];

    /* @ngInject */
    function eventsController($state, $stateParams, eventFactory) {
        var vm = this;
        vm.title = 'eventController';

        get();

        ////////////////

        function get() {
        }
    }
})();