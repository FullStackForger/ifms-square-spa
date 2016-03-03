angular
	.module('squareApp', [
		'ngRoute',
		'square.homePage',
		'square.newsFeed'
	])
	.config(configure)

function configure($routeProvider, $locationProvider) {
	"use strict";
	$routeProvider
		.when('/homepage', {
			controller: 'HomePageCtrl',
			controllerAs: 'homepage',
			template: '<p>{{homepage.text}}</p>'
		})
		.otherwise({
			redirectTo: '/'
		});

	// enable HTML5 History API
	$locationProvider.html5Mode(true);
}