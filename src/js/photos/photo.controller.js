(function() {
    'use strict';

    angular
        .module('app')
        .controller('photoController', photoController);

    photoController.$inject = ['photoFactory', 'apiUrl', '$stateParams'];

    /* @ngInject */
    function photoController(photoFactory, apiUrl, $stateParams) {
        var vm = this;
        vm.title = 'photoController';

        vm.addPhoto = addPhoto;
        
        vm.newPhoto = {};

        activate();

        ////////////////

        function activate() {
        }

        function addPhoto() {

            console.log(vm.newPhoto);
        }

    }
})();