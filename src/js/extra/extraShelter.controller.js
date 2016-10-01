(function() {
    'use strict';

    angular
        .module('app')
        .controller('extraShelterController', extraShelterController);

    extraShelterController.$inject = ['$state', '$stateParams', 'extraFactory'];

    /* @ngInject */
    function extraShelterController($state, $stateParams, extraFactory) {
        var vm = this;
        vm.title = 'extraShelterController';
        vm.get = get;
        

        get();

        ////////////////

        function get() {
        	extrafactory.getAll().then(
        		function(data) {
        			vm.shelters = data;
        		});
        }
    }
})();