(function() {
    'use strict';

    angular
        .module('app')
        .controller('pupInfoController', pupInfoController);

    pupInfoController.$inject = ['$state', '$stateParams', 'pupFactory', 'medicalFactory', 'fitnessFactory'];

    /* @ngInject */
    function pupInfoController($state, $stateParams, pupFactory, medicalFactory, fitnessFactory) {
        var vm = this;
        vm.title = 'pupInfoController';

        vm.med = {};
        vm.newFitness = {};
        vm.ownerId = "";

        vm.addMed = addMed;
        vm.addFit = addFit;
        vm.editPup = editPup;
        vm.updateFit = updateFit;
        vm.removeFit = removeFit;
        getPupById();

        //////////////////////////////////////////////////////////////

        function getPupById() {
            vm.pupId = $stateParams._pupId;
            pupFactory.getById(vm.pupId).then(
                function(data) {
                    console.log("PUP'S INFORMATION");
                    console.log(data);


                    //Grab data and assign it to pup var. Doing it here -
                    // gives us the most current data.
                    vm.pup = data;
                    vm.med = vm.pup.medicalRecord[0];

                    // Get the owners ID so we can go back to overview page
                    vm.ownerId = vm.pup.owner[0]._id;
                    console.log(vm.ownerId);
                }
            );
        }
        ////////////////////////////////////////////////////////////////
        // Add a new record or Update an old one
        function addMed() {
            if (vm.pup.medicalRecord.length === 0) {
                vm.pupId = $stateParams._pupId;
                pupFactory.addMedical(vm.pupId, vm.med).then(
                    function(data) {
                        alert("Medical Record added to pup");
                        //Reload the page with most current data
                        getPupById();
                    }
                );
            } else {
                console.log(vm.pup.medicalRecord[0], vm.pup.medicalRecord[0]._id);

                medicalFactory.update(vm.pup.medicalRecord[0], vm.pup.medicalRecord[0]._id).then(
                    function(data) {
                        console.log(data);
                        $state.reload();
                    }
                );
            }
        }

        ////////////////////////////////////////////////////////////////
        // Owner can add / edit / delete fitness events
        function addFit() {

            pupFactory.addFitness($stateParams._pupId, vm.newFitness).then(
                function() {
                    alert("Fitness event added to pup");
                    vm.newFitness = {};
                    //Reload the page with most current data
                    getPupById();
                }
            );
        }

        function updateFit(fit, id) {
            //console.log(id);
            fitnessFactory.update(fit, id).then(
                function(data) {
                    console.log(data);

                }
            );
        }

        function removeFit(id) {
            if (confirm("Are you sure you want to delete this event?")){
            fitnessFactory.remove(id).then(
                function(data) {
                    console.log(data);
                    $state.reload();
                }
            );
            }
        }


        ////////////////////////////////////////////////////////////////


        function editPup() {
            pupFactory.update(pup, id).then(
                function(data) {
                    console.log(data);

                }
            );
        }
    }
})();
