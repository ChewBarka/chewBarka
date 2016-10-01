(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$state', '$stateParams', 'loginFactory'];

    /* @ngInject */
    function loginController($state, $stateParams, loginFactory) {
        var vm = this;
        vm.title = 'loginController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();