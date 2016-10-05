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

        vm.owner = {};
        getOwnerById();

        function getOwnerById() {
            //if ($stateParams._id) {
                vm.ownerId = $stateParams._id;
                console.log(vm.ownerId);
                overviewFactory.getById(vm.ownerId).then(
                    function(data) {
                        console.log(data);
                        vm.owner = data;
                    }
                );
            //}
        }   
    }

})();
