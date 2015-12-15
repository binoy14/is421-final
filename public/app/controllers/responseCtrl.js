angular.module('responseCtrl', [])

.controller('responseController', function(Response, $routeParams, $uibModal, $scope){
	var vm = this;

	vm.resp = [];
	vm.getResponses = function(){
		Response.get($routeParams.user_id)
		.then(function(data){
			for(var key in data.data){
				vm.resp.push(data.data[key]);
			}
		});
	};

	vm.getResponses();

	vm.sendEmail = function(name, email) {
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl : 'app/views/pages/emailmodal.html',
			controller: 'ModalInstanceCtrl',
			controllerAs: 'modal',
			resolve : {
				items : function() {
					return {
						name : name,
						email : email
					};
				}
			}
		});
	};
})

.controller('ModalInstanceCtrl', function($uibModal, $uibModalInstance, items, $http){
	var vm = this;

	vm.email = items.email;
	vm.name = items.name;

	vm.close = function(){
		$uibModalInstance.dismiss('cancel');
	};

	vm.sendEmail = function(){
		vm.emailData.email = vm.email;
		$http.post('/api/email', vm.emailData)
			.then(function(data){
				if(data.statusText === "OK"){
					vm.close();
				}

			})
	}
})