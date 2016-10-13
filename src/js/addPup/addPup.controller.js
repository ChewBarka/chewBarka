(function() {
    'use strict';

    angular
        .module('app')
        .controller('pupController', pupController);

    pupController.$inject = ['$state', '$stateParams', 'overviewFactory', 'filepickerService', 'photoFactory'];

    /* @ngInject */
    function pupController($state, $stateParams, overviewFactory, filepickerService, photoFactory) {
        var vm = this;
        vm.title = 'pupController';

        vm.newPup = {};
        vm.addPup = addPup;
        vm.upload = upload;
        // vm.uploadMultiple = uploadMultiple;

        ////////////////////////////////////////////////////////
        function addPup() {
            vm.ownerId = $stateParams._id;

            overviewFactory.addPet($stateParams._id, vm.newPup).then(
                function() {
                    alert("Pup was added");
                    $state.go('overview', { "_id": $stateParams._id });
                    //addPhoto();
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











