(function (angular) {
    var module = angular.module('Main', ['ngRoute']);
    module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: 'partials/home.html'})
            .when('/about', {templateUrl: 'partials/imprint.html'})
            .when('/where', {templateUrl: 'partials/where.html'})
            .otherwise({redirectTo: '/'});
    }]);
    module.controller("MainController", function () {
        this.text = "Willkommen auf der Silenamenti GmbH Testseite. Diese Seite ist eine AngularJS Testseite";
    });
})(window.angular);

