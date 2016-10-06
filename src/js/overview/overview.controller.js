(function() {
    'use strict';

    angular
        .module('app')
        .controller('overviewController', overviewController);

    overviewController.$inject = ['$state', '$stateParams', 'overviewFactory', 'pupFactory'];

    /* @ngInject */
    function overviewController($state, $stateParams, overviewFactory, pupFactory) {
        var vm = this;
        vm.title = 'overviewController';

        vm.getOwnerById = getOwnerById;
        vm.getPupInfo = getPupInfo;

        vm.owner = {};
        vm.pups = [];
        vm.pupData = [];

        getOwnerById();


//////////////////////////////////////////////////////////////
        function getOwnerById() {
                vm.ownerId = $stateParams._id;
                overviewFactory.getById(vm.ownerId).then(
                    function(data) {
                        console.log(data);
                        vm.owner = data;
                        
                        // Get the array of the pups the user owns
                        vm.pups = vm.owner.pups;
                        console.log(vm.pups);
                        getPupInfo();
                    }
                );
        }   
//////////////////////////////////////////////////////////////
        function getPupInfo() {
            console.log(vm.pups.length);
            for(var i = 0; i < vm.pups.length; i++) {
                vm.pupId = vm.pups[i]._id;
                console.log(vm.pupId);
                
                pupFactory.getById(vm.pupId).then(
                    function(data) {
                        console.log(data);
                        vm.pupData.push(data);
                    }
                );
            }
        }
    }

})();
