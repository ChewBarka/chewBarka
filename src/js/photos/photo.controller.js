(function() {
    'use strict';

    angular
        .module('app')
        .controller('photoController', photoController);

    photoController.$inject = ['$state','photoFactory', 'apiUrl', '$stateParams', 'filepickerService','overviewFactory', 'loginFactory'];

    /* @ngInject */
    function photoController($state, photoFactory, apiUrl, $stateParams, filepickerService, overviewFactory, loginFactory) {
        var vm = this;
        vm.title = 'photoController';

        vm.addPhoto = addPhoto;
        vm.upload = upload;
        
        vm.photos = [];
        vm.newPhoto = {};
        vm.owner = {};

        activate();

        ////////////////////////////////////////////////

        function activate() {
            vm.ownerId = loginFactory.ownerId;
            photoFactory.getAll().then(
                function(data) {
                    console.log(data);
                    vm.photos = data;
                }
            );
            overviewFactory.getById(vm.ownerId).then(
                function(data) {
                    console.log(data);
                    vm.owner = data;
                }
            );
        }

        ////////////////////////////////////////////////
        function upload() {
            filepickerService.pick({
                    mimetype: 'image/*',
                    language: 'en',
                    services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                    openTo: 'COMPUTER'
                },
                function(Blob) {
                    console.log(JSON.stringify(Blob));
                    vm.newPhoto.picture = Blob;
                    console.log(vm.newPhoto);
                }
            );
        }

        ////////////////////////////////////////////////
        function addPhoto() {
            photoFactory.add(vm.newPhoto).then(
                function() {
                    alert("Photo was added");
                    $state.reload();
                }
            );
        }
        ////////////////////////////////////////////////
        // function getPhotos() {
        //     photoFactory.getAll().then(
        //         function(data) {
        //             vm.photos = data;
        //         }
        //     );
        // }









    }
})();