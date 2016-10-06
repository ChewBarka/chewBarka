(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr', 'uiRouterStyles'])
        .value('apiUrl', 'http://localhost:3000')
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
    				css: 'style/main.css'
    			}
        	})
/**************ADD-a-Pup****************************************/
			.state('addPup', {
        		url: '/addPup?_id',
        		controller: 'pupController as pup',
    			templateUrl: 'js/addPup/addPup.html',
    			data: {
    				css: 'js/addPup/addPup.css'
    			}
        	})
/**************Pup-Info****************************************/
			.state('pupInfo', {
        		url: '/pupInfo?_id',
        		controller: 'pupInfoController as pupInfo',
    			templateUrl: 'js/pupInfo/pupInfo.html',
    			data: {
    				css: 'js/pupInfo/pupInfo.css'
    			}
        	})
/****************Photos*************************************/

			.state('photo', {
				url: '/photo?_id',
				controller: 'photoController as photo',
				templateUrl: 'js/photos/photo.html',
				data: {
					css: 'js/photos/photo.css'
				}
			})
/****************MedicalRecord*******************************************/
			.state('medical', {
				url: '/medical?_id',
				controller: 'medicalDocumentsController as medicalDocs',
				templateUrl: 'js/medical/medical.html',
				data: {
					css: 'js/medical/medical.css'
				}
			})
/****************DogParks*******************************************/
			.state('parks', {
				url: '/parks',
				controller: 'parksController as parks',
				templateUrl: 'js/parks/parks.html',
				data: {
					css: 'js/parks/parks.css'
				}	
			})
/****************LocalDogEvents**************************************************/
			.state('events', {
				url: '/events',
				controller: 'eventsController as events',
				templateUrl: 'js/events/events.html',
				data: {
					css: 'js/events/events.css'
				}
			})
/******************Equipment*****************************************************/		
			.state('equipment', {
				url: '/equipment',
				controller: 'equipmentController as equipment',
				templateUrl: 'js/equipment/equipment.html',
				data: {
					css: 'js/equipment/equipment.css'
				}
			})
/**************Links***************************************************************/
			.state('extra', {
				url: '/extra',
				abstract: true,
				template: '<div ui-view></div>'
			})
				.state('extra.tabs', {
					url: '/tabs',
    				abstract: true,
    				template: '<div ui-view></div>'
    			})
					.state('extra.tabs.shelters', {
						url: '/shelters',
						controller: 'extraShelterController as tabShelter',
						templateUrl: 'js/extra/tabShelter.html',
						data: {
							css: 'js/extra/tabShelter.css'
						}
					})
					.state('extra.tabs.grooming', {
						url: '/grooming',
						controller: 'tabGroomingController as tabGrooming',
						templateUrl: 'js/extra/tabGrooming.html',
						data: {
							css: 'js/extra/tabGrooming.css'
						}
					})
					.state('extra.tabs.training', {
						url: '/training',
						controller: 'tabTrainingController as tabTraining',
						templateUrl: 'js/extra/tabTraining.html',
						data: {
							css: 'js/extra/tabTraining.css'
						}
					})
					.state('extra.tabs.breed', {
						url: '/breed',
						controller: 'tabBreedController as tabBreed',
						templateUrl: 'js/extra/tabBreed.html',
						data: {
							css: 'js/extra/tabBreed.css'
						}
					})
					.state('extra.tabs.overnightstays', {
						url: '/overnightstays',
						controller: 'tabOverNightStaysController as tabOverNightStays',
						templateUrl: 'js/extra/tabOverNightStays.html',
						data: {
							css: 'js/extra/tabOverNightStays.css'
						}
					});

        }
})();