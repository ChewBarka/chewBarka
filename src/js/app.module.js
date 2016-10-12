(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr', 'uiRouterStyles', 'angular-filepicker', 'mcwebb.twilio'])
        .value('apiUrl', 'http://localhost:3000')
        .value('apiEventful', 'https://crossorigin.me/http://api.eventful.com/json/events/search?app_key=PHvPmBT9VSd7vS6C')
        // .value('key', 'ThPMmx93M7QSk4Mq')
        
        .config(function(filepickerProvider) {
            filepickerProvider.setKey('AfHoDw3QbRvmz6BCmkmQqz');
        })

        .config(function(TwilioProvider) {
            TwilioProvider.setCredentials({
                accountSid: 'AC5b426d1b75984a95d899263753e1ea6f',
                authToken: '6f2d5c4cb05804dcb66555d464dc7f99'
            });
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
                    css: 'js/login/login.css'
                }
            })
            /**************OVERVIEW****************************************/
            .state('overview', {
                url: '/overview?_id',
                controller: 'overviewController as overview',
                templateUrl: 'js/overview/overview.html',
                data: {
                    css: ['style/main.css', 'style/main.css']
                }
            })
            /**************ADD-a-Pup****************************************/
            .state('addPup', {
                url: '/addPup?_id',
                controller: 'pupController as pup',
                templateUrl: 'js/addPup/addPup.html',
                data: {
                    css: ['js/addPup/addPup.css', 'style/main.css']
                }
            })
            /**************Pup-Info****************************************/
            .state('pupInfo', {
                url: '/pupInfo?_id',
                controller: 'pupInfoController as pupInfo',
                templateUrl: 'js/pupInfo/pupInfo.html',
                data: {
                    css: ['js/pupInfo/pupInfo.css', 'style/main.css']
                }
            })
            /****************Photos*************************************/

        .state('photo', {
                url: '/photo?_id',
                controller: 'photoController as photo',
                templateUrl: 'js/photos/photo.html',
                data: {
                    css: ['js/photos/photo.css', 'style/main.css']
                }
            })
            /****************MedicalRecord*******************************************/
            .state('medical', {
                url: '/medical?_id',
                controller: 'medicalDocumentsController as medicalDocs',
                templateUrl: 'js/medical/medical.html',
                data: {
                    css: ['js/medical/medical.css', 'style/main.css']
                }
            })
            /****************DogParks*******************************************/
            .state('parks', {
                url: '/parks?_id',
                controller: 'parksController as parks',
                templateUrl: 'js/parks/parks.html',
                data: {
                    css: ['js/parks/parks.css', 'style/main.css']
                }
            })
            /****************LocalDogEvents**************************************************/
            .state('events', {
                url: '/events?_id',
                controller: 'eventsController as events',
                templateUrl: 'js/events/events.html',
                data: {
                    css: ['js/events/events.css', 'style/main.css']
                }
            })
            /******************Equipment*****************************************************/
            .state('equipment', {
                url: '/equipment?_id',
                controller: 'equipmentController as equipment',
                templateUrl: 'js/equipment/equipment.html',
                data: {
                    css: ['js/equipment/equipment.css', 'style/main.css']
                }
            })
            /*****************About Us******************************************************************/
            .state('about', {
                url: '/about?_id',
                controller: 'aboutController as about',
                templateUrl: 'js/about/about.html',
                data: {
                    css: ['js/about/about.css', 'style/main.css']
                }
            })
            /******************Account*************************************************************/
            .state('account', {
                url: '/account?_id',
                controller: 'accountController as account',
                templateUrl: 'js/account/account.html',
                data: {
                    css: ['js/account/account.css', 'style/main.css']
                }
            })
            /**************Links***************************************************************/
            .state('extra', {
                url: '/extra?_id',
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
