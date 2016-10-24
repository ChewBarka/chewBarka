(function() {
    'use strict';

    angular
        .module('app')
        .controller('eventsController', eventsController);

    eventsController.$inject = ['$state', '$stateParams', 'eventsFactory', '$sce', 'loginFactory', 'overviewFactory'];

    /* @ngInject */
    function eventsController($state, $stateParams, eventsFactory, $sce, loginFactory, overviewFactory) {
        var vm = this;
        vm.title = 'eventController';
        
        vm.zipcode = '';
        vm.owner = {};
        vm.search = '';


        vm.getEvents = getEvents;
        getOwnerById();

        ////////////////

        function getOwnerById() {
            vm.ownerId = loginFactory.ownerId;
            console.log(vm.ownerId);
            overviewFactory.getById(vm.ownerId).then(
                function(data) {
                    console.log("OWNERS INFORMATION:");
                    console.log(data);
                    vm.owner = data;
                    vm.zipcode = vm.owner.zipCode;
                    getEvents(vm.zipcode);
                }
            );



        }
        function getEvents(zip) {
            eventsFactory.getAll(zip).then(
                function(data) {
                    vm.events = data;
                    console.log(vm.events);
                }
            );
        }
    }
})();