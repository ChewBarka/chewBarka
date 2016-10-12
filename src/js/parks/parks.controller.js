(function() {
    'use strict';

    angular
        .module('app')
        .controller('parksController', parksController);

    parksController.$inject = ['$state', '$stateParams', 'medicalFactory','Twilio'];

    /* @ngInject */
    function parksController($state, $stateParams, medicalFactory, Twilio) {
        var vm = this;
        vm.title = 'parksController';

        vm.submit = submit;

        activate();

        ////////////////

        function activate() {
        }

        function submit() {
            Twilio.create('Messages', {
            From: '+19143716113',
            To: '+16193487337',
            Body: 'GOT THAT SHIT WORKING HOMIE, SHAKE THAT ASS!!!!!'
        })
        .success(function (data, status, headers, config) {
            // Success - do somethingc
            console.log(data);
        })
        .error(function (data, status, headers, config) {
            // Failure - do something
            console.log(data);
        });
        }
    }
})();