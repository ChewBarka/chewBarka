(function() {
    'use strict';

    angular
        .module('app')
        .controller('pupController', pupController);

    pupController.$inject = ['$state', '$stateParams', 'overviewFactory', 'filepickerService', 'photoFactory','loginFactory'];

    /* @ngInject */
    function pupController($state, $stateParams, overviewFactory, filepickerService, photoFactory, loginFactory) {
        var vm = this;
        vm.title = 'pupController';

        vm.newPup = {};
        vm.addPup = addPup;
        vm.upload = upload;

        ////////////////////////////////////////////////////////
        function addPup() {
            vm.ownerId = loginFactory.ownerId;

            overviewFactory.addPet(vm.ownerId, vm.newPup).then(
                function() {
                    toastr.success("Pup was added");
                    $state.go('overview', { "_id": $stateParams._id });
                                    }
            );
        }
        //////////////////////////////////////////////////////////
        function upload() {
            filepickerService.pick({
                    mimetype: 'image/*',
                    language: 'en',
                    services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                    openTo: 'COMPUTER'
                },
                function(Blob) {
                    console.log(JSON.stringify(Blob));
                    vm.newPup.picture = Blob;
                    console.log(vm.newPup);
                }

            );
        }
    }
})();











