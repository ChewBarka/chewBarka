(function() {
    'use strict';

    angular
        .module('app')
        .controller('pupInfoController', pupInfoController);

    pupInfoController.$inject = ['$state', '$stateParams', 'pupFactory', 'medicalFactory'];

    /* @ngInject */
    function pupInfoController($state, $stateParams, pupFactory, medicalFactory) {
        var vm = this;
        vm.title = 'pupInfoController';

        vm.med = {};
        vm.newFitness = {};
        vm.ownerId = "";

        vm.addMed = addMed;
        vm.addFit = addFit;
        vm.editPup = editPup;
        vm.updateMed = updateMed;
        getPupById();

//////////////////////////////////////////////////////////////

	function getPupById() {
		vm.pupId = $stateParams._id;
		pupFactory.getById(vm.pupId).then(
			function(data) {
				console.log("PUP'S INFORMATION");
				console.log(data);
				
                //Grab data and assign it to pup var. Doing it here -
                // gives us the most current data.
                vm.pup = data;
                
                // Get the owners ID so we can go back to overview page
                vm.ownerId = vm.pup.owner[0]._id;
                console.log(vm.ownerId);
			}
		);
	}        
////////////////////////////////////////////////////////////////
    
    function addMed() {
        vm.pupId = $stateParams._id;
        pupFactory.addMedical(vm.pupId, vm.med).then(
            function(data){ 
                alert("Medical Record added to pup");
                //Reload the page with most current data
                getPupById();
            }
        );
    }
    function updateMed() {
        console.log(vm.pup.medicalRecord[0], vm.pup.medicalRecord[0]._id);
        medicalFactory.update(vm.pup.medicalRecord[0], vm.pup.medicalRecord[0]._id).then(
            function(data) {
                console.log(data);
                $state.reload();
            }
        );
    }
////////////////////////////////////////////////////////////////
    
    function addFit() {

        pupFactory.addFitness($stateParams._id, vm.newFitness).then(
            function(){
                alert("Fitness event added to pup");
                vm.newFitness = {};
                //Reload the page with most current data
                getPupById();
            }
        );
    }
    function editPup(pup, id) {
            pupFactory.update(pup, id).then(
                function(data) {
                    console.log(data);

                }
            );
        }
    }
})();













