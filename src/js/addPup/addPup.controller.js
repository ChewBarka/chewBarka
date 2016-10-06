(function() {
    'use strict';

    angular
        .module('app')
        .controller('pupController', pupController);

    pupController.$inject = ['$state', '$stateParams', 'pupFactory', 'overviewFactory'];

    /* @ngInject */
    function pupController($state, $stateParams, pupFactory, overviewFactory) {
        var vm = this;
        vm.title = 'pupController';

        vm.newPup = {};
        vm.addPup = addPup;
        vm.addPupToOwner = addPupToOwner;
        

        ////////////////////////////////////////////////////////
        function addPup() {
            vm.ownerId = $stateParams._id;

            pupFactory.add(vm.newPup).then(
                function(data) {
                    vm.newPup = data;
                    console.log("New pups information:");
                    console.log(vm.newPup);
                    addPupToOwner();

                }
            );
        }
        ////////////////////////////////////////////////////////
        function addPupToOwner() {

            overviewFactory.addPet($stateParams._id, vm.newPup).then(
                function() {
                    alert("Pup was added");
                    $state.go('overview', {"_id": $stateParams._id});
                }
            );
        }           
    }
})();
