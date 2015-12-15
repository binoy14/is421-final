angular.module('userApp', [
        'ngAnimate',
        'app.routes',
        'authService',
        'mainCtrl',
        'userService',
        'userCtrl',
        'responseCtrl',
        'responseService',
        'emailmodal',
        'ui.bootstrap'
    ])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('AuthInspector');
    });
