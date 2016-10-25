(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr', 'uiRouterStyles', 'angular-filepicker','ngSanitize', 'xeditable', 'LocalStorageModule', 'datePicker', 'angular-momentjs'])
        .value('apiUrl', 'http://localhost:3000')
        .value('apiEventful', 'https://crossorigin.me/http://api.eventful.com/json/events/search?app_key=rDvVKxbpp98QFF8r')
        // .value('key', 'ThPMmx93M7QSk4Mq')

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
            })
            /******************Equipment*****************************************************/
            .state('equipment', {
                url: '/equipment',
                controller: 'equipmentController as equipment',
                templateUrl: 'js/equipment/equipment.html',
                data: {
                    css: ['js/equipment/equipment.css', 'style/main.css']
                }
            })
            /******************Account*************************************************************/
            .state('account', {
                url: '/account',
                controller: 'accountController as account',
                templateUrl: 'js/account/account.html',
                data: {
                    css: ['js/account/account.css', 'style/main.css']
                }
            })
            /**************Links***************************************************************/
            .state('extra', {
                url: '/extra',
                abstract: true,
                template: '<div ui-view></div>'
            })
            .state('extra.links', {
                url: '/links',
                controller: 'linksController as links',
                templateUrl: 'js/extra/extraLinks.html',
                data: {
                    css: 'style/main.css'
                }
            })
            .state('extra.links.tabs', {
                url: '/tabs',
                abstract: true,
                template: '<div ui-view></div>'
            })
            .state('extra.links.tabs.shelters', {
                url: '/shelters',
                controller: 'linkShelterController as linkShelter',
                templateUrl: 'js/extra/linkShelter.html',
                data: {
                    css: 'js/extra/linkShelter.css'
                }
            })
            .state('extra.links.tabs.grooming', {
                url: '/grooming',
                controller: 'linkGroomingController as linkGrooming',
                templateUrl: 'js/extra/linkGrooming.html',
                data: {
                    css: 'js/extra/linkGrooming.css'
                }
            })
            .state('extra.links.tabs.training', {
                url: '/training',
                controller: 'linkTrainingController as linkTraining',
                templateUrl: 'js/extra/linkTraining.html',
                data: {
                    css: 'js/extra/linkTraining.css'
                }
            })
            .state('extra.links.tabs.breed', {
                url: '/breed',
                controller: 'linkBreedController as linkBreed',
                templateUrl: 'js/extra/linkBreed.html',
                data: {
                    css: 'js/extra/linkBreed.css'
                }
            })
            .state('extra.links.tabs.overnightstays', {
                url: '/overnightstays',
                controller: 'linkOverNightStaysController as linkOverNightStays',
                templateUrl: 'js/extra/linkOverNightStays.html',
                data: {
                    css: 'js/extra/linkOverNightStays.css'
                }
            });

    }
})();
