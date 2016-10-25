(function() {
    'use strict';

    angular
        .module('app')
        .controller('parksController', parksController);

    parksController.$inject = ['$state', '$stateParams', 'medicalFactory'];

    /* @ngInject */
    function parksController($state, $stateParams, medicalFactory) {
        var vm = this;
        vm.title = 'parksController';

        activate();

        //vm.googleMapsUrl = 'https://www.google.com/maps/embed/v1/search?q=dog+parks+near+me&zoom=12&key=AIzaSyA_JDS7v_VkPe09bWOnr6jVNe62QOx1EnE';
        
        ////////////////

        function activate() {
        }

    }
})();