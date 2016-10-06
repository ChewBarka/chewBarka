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
        vm.fakeLogin = fakeLogin;

        activate();
        ////////////////

        function activate() {
            loginFactory.getAll().then(
                function(data){
                    vm.owners = data;
                    console.log(vm.owners);
                });
        }
        
        function fakeLogin() {
            if (vm.loginInfo.password != 'butts') {
                alert("The password is butts");
            }
            else {
                $state.go('overview', {"_id": vm.selectedOwner});
            }
        }
    }
})();