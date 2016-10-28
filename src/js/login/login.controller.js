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

        vm.registerInfo = {};
        vm.loginInfo = {};

        vm.authUser = authUser;
        vm.registerUser = registerUser;
        vm.logoutUser = logoutUser;

        ////////////////

        function authUser() {
            console.log('hello');
            loginFactory.login(vm.loginInfo.email, vm.loginInfo.password).then(
                function(ownerId, error) {
                    $state.go('overview', { _id: ownerId });
                }
            );
        }

        function registerUser() {
            console.log(vm.registerInfo);
            loginFactory.register(vm.registerInfo).then(
                function(ownerId) {
                    console.log('here is the owner ID: ', ownerId);
                    loginFactory.login(vm.registerInfo.email, vm.registerInfo.password).then(
                        function() {
                            $state.go('overview', { _id: ownerId });
                        }
                    );
                }
            );
        }

        function logoutUser() {
            vm.session = $stateParams._id;
            console.log(vm.ownerId);
            loginFactory.logout(vm.session);
            $state.go('login');
        }
        //CAMERON'S CODE
        //  vm.login = function(username, password) {

        //     authFactory.login(username, password).then(
        //         function(response) {
        //             loggedIn = true;
        //             $state.go('overview');
        //         }
        //       );

        // }
    }
})();
