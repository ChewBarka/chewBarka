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


        
        getAllOwners();

        ////////////////

        function getAllOwners() {
            overviewFactory.getAll().then(
                function(data) {
                    vm.owners = data;
                }
            );
        }
        
        function getOwnerById() {
            // if($stateParams.ownerId) {
                overviewFactory.getById().then(
                    function(data) {
                        console.log(data);
                        vm.own = data;
                    }
                );
            }
        //function getPupById() {
        //     if($stateParams.pupId) {
        //         overviewFactory.getById($state.pupId).then(
        //             function(data) {
        //                 console.log(data);
        //                 vm.owner = data;
        //             }
        //         );
        //     }
        // }

        

    }
})();