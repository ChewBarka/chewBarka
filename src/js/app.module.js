(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr', 'uiRouterStyles', 'angular-filepicker','ngSanitize', 'xeditable', 'LocalStorageModule', 'datePicker', 'angular-momentjs'])
        .value('apiUrl', 'http://localhost:3000')
        .value('apiEventful', 'https://crossorigin.me/http://api.eventful.com/json/events/search?app_key=rDvVKxbpp98QFF8r')

        .run(function(editableOptions, editableThemes, loginFactory) {
              editableOptions.theme = 'default';

              editableThemes['default'].submitTpl = '<button type="submit">ok</button>';

              loginFactory.initialize();
        })

    .config(function(filepickerProvider) {
        filepickerProvider.setKey('AdZZNOBk8TymXuEOlIkAsz');
    })

    .config(function($momentProvider){
        $momentProvider
          .asyncLoading(false)
          .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
        })
    
    .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function appConfig($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'loginController as login',
                templateUrl: 'js/login/login.html',
                data: {
                    css: ['js/login/login.css']
                }
            })
            /**************OVERVIEW****************************************/
            .state('overview', {
                url: '/overview',
                controller: 'overviewController as overview',
                templateUrl: 'js/overview/overview.html',
                data: {
                    css: ['js/overview/overview.css', 'style/main.css']
                }
            })
            /**************ADD-a-Pup****************************************/
            .state('addPup', {
                url: '/addPup',
                controller: 'pupController as pup',
                templateUrl: 'js/addPup/addPup.html',
                data: {
                    css: ['js/addPup/addPup.css', 'style/main.css']
                }
            })
            /**************Pup-Info****************************************/
            .state('pupInfo', {
                url: '/pupInfo?_pupId',
                controller: 'pupInfoController as pupInfo',
                templateUrl: 'js/pupInfo/pupInfo.html',
                data: {
                    css: ['js/pupInfo/pupInfo.css', 'style/main.css']
                }
            })
            /****************Photos*************************************/

        .state('photo', {
                url: '/photo',
                controller: 'photoController as photo',
                templateUrl: 'js/photos/photo.html',
                data: {
                    css: ['js/photos/photo.css', 'style/main.css']
                }
            })
            /****************MedicalRecord*******************************************/
            .state('medical', {
                url: '/medical',
                controller: 'medicalDocumentsController as medicalDocs',
                templateUrl: 'js/medical/medical.html',
                data: {
                    css: ['js/medical/medical.css', 'style/main.css']
                }
            })
            /****************DogParks*******************************************/
            .state('parks', {
                url: '/parks',
                controller: 'parksController as parks',
                templateUrl: 'js/parks/parks.html',
                data: {
                    css: ['js/parks/parks.css', 'style/main.css']
                }
            })
            /****************LocalDogEvents**************************************************/
            .state('events', {
                url: '/events',
                controller: 'eventsController as events',
                templateUrl: 'js/events/events.html',
                data: {
                    css: ['js/events/events.css', 'style/main.css']
                }
            });
            /******************Equipment*****************************************************/
            /******************Account*************************************************************/
            /**************Links***************************************************************/
    }
})();
