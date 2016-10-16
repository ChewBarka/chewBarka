(function() {
    'use strict';

    angular
        .module('app')
        .controller('overviewController', overviewController);

    overviewController.$inject = ['$state', '$stateParams', 'overviewFactory', 'pupFactory', 'todoFactory', 'loginFactory'];

    /* @ngInject */
    function overviewController($state, $stateParams, overviewFactory, pupFactory, todoFactory, loginFactory) {
        var vm = this;
        vm.title = 'overviewController';

        vm.getOwnerById = getOwnerById;
        vm.getPupInfo = getPupInfo;
        vm.addPup = addPup;
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;
        vm.updateTodo = updateTodo;
        vm.deletePup = deletePup;

        vm.owner = {};
        vm.pups = [];
        vm.pupData = [];
        vm.newTodo = {};
        vm.saveTodo = {};
        vm.vetAppt = [];

        getOwnerById();

        // if(!loginFactory.isAuth) {
        //     $state.go('login');
        // }
//////////////////////////////////////////////////////////////

        function getOwnerById() {
            vm.ownerId = $stateParams._id;
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

                        // Here we grabbed the next vet visit from each dog
                        vm.vetAppt.push(data.medicalRecord[0].nextVisit);
                        console.log('List of Vet appointment date: ' + vm.vetAppt);

                    }
                );
            }
        }

        //////////////////////////////////////////////////////////////
        // Navigate to the addPup page / Delete a pup
        function addPup() {
            $state.go('addPup', { "_id": vm.ownerId });
        }

        function deletePup(pup) {
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
            overviewFactory.addTodo($stateParams._id, vm.newTodo).then(
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

        function updateTodo(todo, id) {
            todoFactory.update(todo, id).then(
                function(data) {
                    console.log(data);
                    toastr.success("Task was Updated");
                    getOwnerById();
                }
            );
        }

        function deleteTodo(todo) {
            console.log(todo._id);
            todoFactory.remove(todo._id).then(
                function(data) {
                    console.log(data);
                    toastr.success("Task Deleted");
                    getOwnerById();
                }
            );
        }

    }
})();
