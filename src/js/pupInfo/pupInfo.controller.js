(function() {
    'use strict';

    angular
        .module('app')
        .controller('pupInfoController', pupInfoController);

    pupInfoController.$inject = ['$state', '$stateParams', 'pupFactory'];

    /* @ngInject */
    function pupInfoController($state, $stateParams, pupFactory) {
        var vm = this;
        vm.title = 'pupInfoController';

        //vm.pup = {};

        //vm.getPupById = getPupById;

        getPupById();

//////////////////////////////////////////////////////////////

	function getPupById() {
		vm.pupId = $stateParams._id;
		pupFactory.getById(vm.pupId).then(
			function(data) {
				console.log("PUP'S INFORMATION");
				console.log(data);
				vm.pup = data;
			}
		);
	}        

    }
})();