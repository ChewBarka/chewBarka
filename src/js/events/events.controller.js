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
        

        vm.getEvents = getEvents;
        get();

        ////////////////

        function get() {
            
        }
        function getEvents() {
            eventsFactory.getAll().then(
                function(data) {
                    vm.events = data;
                });
        }
    }
})();