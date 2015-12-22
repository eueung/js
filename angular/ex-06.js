var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'ex-06/home.html',
			controller  : 'mainController'
		})
		.when('/home', {
			templateUrl : 'ex-06/home.html',
			controller  : 'mainController'
		})
		.when('/about', {
			templateUrl : 'ex-06/about.html',
			controller  : 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'ex-06/contact.html',
			controller  : 'contactController'
		});
});

scotchApp.controller('mainController', function($scope) {
	$scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});