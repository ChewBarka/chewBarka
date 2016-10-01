(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'uiRouterStyles', 'toastr'])
        .value('apiUrl', 'localhost:8080')
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
        		url: '/overview',
        		abstract: true,
        		template: '<div ui-view></div'
        	})
        		.state('overview.info', {
        			url: '/info',
        			controller: 'overviewInfoController as overviewInfo',
        			templateUrl: 'js/overview/info.html',
        			data: {
        				css: 'js/overview/info.css'
        			}
        		})

/****************Photos*************************************/

			.state('photos', {
				url: '/photos',
				abstract: true,
				template: '<div ui-view></div>'
			})
				.state('photos.pictures', {
					url: '/pictures',
					controller: 'photoPictureController as photoPicture',
					templateUrl: 'js/photos/pictures.html',
					data: {
						css: 'js/photos/pictures.css'
					}
				})
/****************MedicalRecord*******************************************/
			.state('medical', {
				url: '/medical',
				abstract: true,
				template: '<div ui-view></div>'
			})
				.state('medical.documents', {
					url: '/documents',
					controller: 'medicalDocumentsController as medicalDocs',
					templateUrl: 'js/medical/documents.html',
					data: {
						css: 'js/medical/documents.css'
					}
				})
/****************DogParks*******************************************/
			.state('parks', {
				url: '/parks',
				abstract: true,
				template: '<div ui-view></div>'
			})
				.state('parks.fordogs', {
					url: 'fordogs',
					controller: 'parksForDogsController as parksForDogs',
					templateUrl: 'js/parks/fordogs.html',
					data: {
						css: 'js/parks/fordogs.css'
					}
				})
/****************LocalDogEvents**************************************************/
			.state('events', {
				url: '/events',
				abstract: true,
				template: '<div ui-view></div>'
			})
				.state('events.details', {
					url: '/details',
					controller: 'eventDetailController as eventDetail',
					templateUrl: 'js/events/detail.html',
					data: {
						css: 'js/events/detail.css'
					}
				})
/******************Equipment*****************************************************/		
			.state('equipment', {
				url: '/equipment',
				abstract: true,
				template: '<div ui-view></div'
			})
				.state('equipment.details', {
					url: '/details',
					controller: 'equipmentDetailController as equipmentDetail',
					templateUrl: 'js/equipment/detail.html',
					data: {
						css: 'js/equipment/detail.css'
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