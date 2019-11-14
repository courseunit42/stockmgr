'use strict';

// Declare app level module which depends on filters, and services
angular.module('altairs', ['ngRoute','altairs.filters','altairs.services','altairs.directives','altairs.controllers']).config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {templateUrl: '/index.html', controller: 'ValidateController'});
  $routeProvider.when('/index.html', {templateUrl: '/index.html', controller: 'ValidateController'});
  $routeProvider.when('/loginuser', {templateUrl: 'includes/loginuser', controller: 'LoginController'});
  $routeProvider.when('/logoutuser', {templateUrl: 'includes/logoutuser', controller: 'LogoutController'});
  $routeProvider.otherwise({redirectTo: '/admin'});
}]);

angular.module('altairs', ['altairs.controllers']);
