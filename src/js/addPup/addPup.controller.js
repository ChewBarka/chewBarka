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

        ////////////////////////////////////////////////////////
        function addPup() {
            vm.ownerId = $stateParams._id;

            overviewFactory.addPet($stateParams._id, vm.newPup).then(
                function() {
                    alert("Pup was added");
                    $state.go('overview', {"_id": $stateParams._id});
                }
            );
        }       
    }
})();
