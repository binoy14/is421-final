angular.module('mainCtrl', [])

.controller('mainController', function($rootScope, $location, Auth) {

    var vm = this;

    // get info if a person is logged in
    vm.loggedIn = Auth.isLoggedIn();

    Auth.getUser()
	    .then(function(data) {
	        vm.user = data.data;
	    });

    // check to see if a user is logged in on every request
    $rootScope.$on('$routeChangeStart', function() {
        vm.loggedIn = Auth.isLoggedIn();

        // get user information on page load
        Auth.getUser()
            .then(function(data) {
                vm.user = data.data;
            });
    });

    vm.origin = location.origin;

    // function to handle login form
    vm.doLogin = function() {
        vm.processing = true;

        // clear the error
        vm.error = '';

        Auth.login(vm.loginData.username, vm.loginData.password)
            .success(function(data) {
                vm.processing = false;
                // if a user successfully logs in, redirect to users page
                if (data.success)
                    $location.path('/');
                else
                    vm.error = data.message;

            });
    };

    // function to handle logging out
    vm.doLogout = function() {
        Auth.logout();
        vm.user = '';

        $location.path('/login');
    };

    // function to handle registering user
    vm.registerUser = function(userData) {
        User.create(vm.registerData.username, vm.registerData.name, vm.registerData.password)
            .success(function(data) {
                console.log(data);
            });
    };

});
