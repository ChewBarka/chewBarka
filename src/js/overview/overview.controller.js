(function() {
    'use strict';

    angular
        .module('app')
        .controller('overviewController', overviewController);

    overviewController.$inject = ['$state', '$stateParams', 'overviewFactory', 'pupFactory', 'todoFactory', 'loginFactory', '$moment', 'photoFactory'];

    /* @ngInject */
    function overviewController($state, $stateParams, overviewFactory, pupFactory, todoFactory, loginFactory, $moment, photoFactory) {
        var vm = this;
        vm.title = 'overviewController';

        vm.getOwnerById = getOwnerById;
        vm.getPupInfo = getPupInfo;
        vm.addPup = addPup;
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;
        vm.deletePup = deletePup;
        vm.updateProfile = updateProfile;
        
        vm.photos = [];
        vm.owner = {};
        vm.pups = [];
        vm.pupData = [];
        vm.newTodo = {};
        vm.saveTodo = {};
        vm.vetAppt = [];
        vm.fitnessData = [];

        getOwnerById();
        getPhotos();
        //////////////////////////////////////////////////////////////

        function getOwnerById() {
            vm.ownerId = loginFactory.ownerId;
            console.log(vm.ownerId);
            overviewFactory.getById(vm.ownerId).then(
                function(data) {
                    console.log("OWNERS INFORMATION:");
                    console.log(data);
                    vm.owner = data;

                    // Get the array of the pups the user owns
                    vm.pups = vm.owner.pups;

                    // Now run the getPupInfo so we can populate more details on this page
                    getPupInfo();
                }
            );
        }

        //////////////////////////////////////////////////////////////
        function getPupInfo() {
            console.log("PUPS INFORMATION:");
            // Using a for loop, grab the data of each pup.
            for (var i = 0; i < vm.pups.length; i++) {
                vm.pupId = vm.pups[i]._id;

                pupFactory.getById(vm.pupId).then(
                    function(data) {
                        console.log(data);
                        vm.pupData.push(data);
                        latestFitness(data);
                        nextVisit(data);

                        // Here we grabbed all of the fitness Data, To disply the last one
                        vm.fitnessData.push(data.fitness[0].date);
                        vm.fitnessData.push(data.fitness[0].notes);

                        // Here we grabbed the next vet visit from each dog
                        vm.vetAppt.push(data.medicalRecord[0].nextVisit);
                        console.log('List of Vet appointment date: ' + vm.vetAppt);

                        // vm.fitnessData.push(data.fitness);
                        // vm.fitnessData.push(data.fitness[0].notes);
                    }
                );
            }
            console.log(vm.fitnessData);
        }

        function latestFitness(pup) {
            var fitness = pup.fitness;
            console.log(fitness);
            for (var i = 0; i < fitness.length; i++) {
                var obj = JSON[i];

                // vm.fitnessData.push(obj);
                // console.log(vm.fitnessData);
                console.log(obj);
            }
        }
        function nextVisit(pup) {
        }
        //////////////////////////////////////////////////////////////
        // Navigate to the addPup page / Delete a pup
        function addPup() {
            $state.go('addPup', { "_id": vm.ownerId });
        }


        /////******** Do this Soon ********/////////
        function deletePup(pup) {
            console.log('delete pup');
            if (confirm("Are you sure you want to delete this pup?")) {
                pupFactory.remove(pup._id).then(
                    function(data) {
                        console.log('deleted' + data);
                        toastr.success("Deleted Sucessfully");
                        getOwnerById();
                    }
                );
            }
        }

        //////////////////////////////////////////////////////////////
        // All of the TODO functions
        function addTodo() {
            vm.newTodo.date = new Date();
            overviewFactory.addTodo(vm.ownerId, vm.newTodo).then(
                function(data) {
                    console.log(data);
                    toastr.success('Task was Added');
                    // Empty the todo fields
                    vm.newTodo = {};
                    // Refresh the page
                    getOwnerById();
                }
            );
        }

        function updateProfile() {
            overviewFactory.update(vm.owner, vm.owner._id) .then(
                function(data) {
                    console.log(data);
                    toastr.success("Profile was updated");
                    $state.reload();
                }
            );
        }

        function deleteTodo(id) {
                todoFactory.remove(id).then(
                    function(data) {
                        console.log(data);
                        toastr.success("Task Deleted");
                        getOwnerById();
                    }
                );
        }

        function getPhotos() {
            photoFactory.getAll().then(
                function(data) {
                    console.log(data);
                    vm.photos = data;
                }
            );
        }

    }
})();
