(function() {
    'use strict';

    angular
        .module('app')
        .controller('linkShelterController', linkShelterController);

    linkShelterController.$inject = ['$state', '$stateParams', 'shelterFactory'];

    /* @ngInject */
    function linkShelterController($state, $stateParams, shelterFactory) {
        var vm = this;
        vm.title = 'linkShelterController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();