(function() {
    'use strict';

    angular
        .module('app')
        .controller('eventsController', eventsController);

    eventsController.$inject = ['$state', '$stateParams', 'eventsFactory', '$sce'];

    /* @ngInject */
    function eventsController($state, $stateParams, eventsFactory, $sce) {
        var vm = this;
        vm.title = 'eventController';
        // vm.city = {};

        vm.getEvents = getEvents;
        getEvents();

        ////////////////

        function getEvents(city) {
            eventsFactory.getAll(city).then(
                function(data) {
                    console.log(data);
                    vm.events = data;
                }
            );
        }
    }
})();