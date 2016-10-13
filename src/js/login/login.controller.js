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

        /* COMMENT THIS OUT FOR NON-DEVELOPMENT */
        // vm.registerInfo.firstName = 'Cole';
        // vm.registerInfo.lastName = 'Logan';
        // vm.registerInfo.address = '3872 Jewell Street San Diego';
        // vm.registerInfo.zipCode = '92109';
        // vm.registerInfo.telephone = '9092247557';
        // vm.registerInfo.email = 'colelogan19@yahoo.com',
        // vm.registerInfo.password = 'password123';
        // vm.registerInfo.confirmPassword = 'password123';

        vm.authUser = authUser;
        vm.registerUser = registerUser;

       
        ////////////////

        function authUser(email, password) {
            console.log(email, password);
            loginFactory.login(email, password).then(
                function(ownerId) {
                    $state.go('overview', { _id: ownerId});
                }
            );
        }
        function registerUser(){
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