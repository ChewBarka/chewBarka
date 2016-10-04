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
        vm.loginInfo = {};
        activate();

        ////////////////

        function activate() {

        }
        function fakeLogin() {
            if (vm.loginInfo.password != 'butts') {
                alert("The password is butts");
            }
            else {
                $state.go('overview');
            }
        }
    }
})();