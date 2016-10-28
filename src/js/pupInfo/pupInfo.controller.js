(function() {
    'use strict';

    angular
        .module('app')
        .controller('pupInfoController', pupInfoController);

    pupInfoController.$inject = ['$state', '$stateParams', 'pupFactory', 'medicalFactory', 'fitnessFactory', 'filepickerService'];

    /* @ngInject */
    function pupInfoController($state, $stateParams, pupFactory, medicalFactory, fitnessFactory, filepickerService) {
        var vm = this;
        vm.title = 'pupInfoController';

        vm.med = {};
        vm.newFitness = {};
        vm.ownerId = "";
        vm.lastFit = '';
        vm.newPDF = [];
        vm.pdfURL = '';

        vm.addMed = addMed;
        vm.addFit = addFit;
        vm.editPup = editPup;
        vm.removeFit = removeFit;
        vm.upload = upload;
        vm.redirectTo = redirectTo;
        vm.addPup = addPup;
        vm.removePup = removePup;

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

                    vm.lastFit = vm.pup.fitness[vm.pup.fitness.length - 1].date;
                    console.log(vm.lastFit);

                    vm.pdfURL = vm.pup.medPDF.url;

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
                        toastr.success("Medical Record added to pup");
                        //Reload the page with most current data
                        getPupById();
                        $state.reload();
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

            if (vm.newFitness.notes == null) {
                toastr.error("Please enter a description for the activity");

            } else {
                vm.newFitness.date = new Date();
                pupFactory.addFitness($stateParams._pupId, vm.newFitness).then(
                    function() {
                        toastr.success("Fitness event added to pup");
                        vm.newFitness = {};
                        //Reload the page with most current data
                        getPupById();
                    }
                );
            }
        }

        function removeFit(id) {
            if (confirm("Are you sure you want to delete this event?")) {
                fitnessFactory.remove(id).then(
                    function(data) {
                        console.log(data);
                        toastr.success("Fitness Event Deleted");
                        $state.reload();
                    }
                );
            }
        }


        ////////////////////////////////////////////////////////////////


        function editPup() {
            pupFactory.update(vm.pup, vm.pup._id).then(
                function(data) {
                    console.log(data);
                    $state.reload();

                }
            );
        }

        function addPup() {
            $state.go('addPup', { "_id": vm.ownerId });
        }

        function removePup() {
            if (confirm("Are you sure you want to delete this pup?")) {
                pupFactory.remove(vm.pup._id).then(
                    function(data) {
                        console.log('deleted' + data);
                        toastr.success("Pup has has been removed :(");
                        $state.go('overview', { "_id": $stateParams._id });
                    }
                );
            }
        }

        ////////////////////////////////////////////////////////////////////

        //Add pdf medical rec.

        function upload() {
            filepickerService.pick({

                    language: 'en',
                    services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE'],
                    openTo: 'COMPUTER'
                },
                function(Blob) {
                    console.log(JSON.stringify(Blob));
                    vm.pup.medPDF = Blob;
                    console.log(Blob);
                    editPup(vm.pup, vm.pup._id);
                }


            );
        }

        function redirectTo() {
            if (vm.pup.medPDF == null) {
                toastr.error("No PDF Uploaded Yet!");
            } else {
                window.location.href = vm.pdfURL;
            }
        }




    }
})();
