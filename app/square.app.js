angular
	.module('squareApp', [
		'ngRoute',
		'socialFilters',
		'square.homePage',
		'square.newsFeed'
	])
	.config(configure)

function configure($routeProvider, $locationProvider) {
	"use strict";
	$routeProvider
		.when('/', {
			controller: 'HomePageCtrl',
			controllerAs: 'homePage',
			template: '<p>{{homePage.text}}</p>'
		})
		.when('/newsfeed', {
			controller: 'NewsFeedCtrl',
			controllerAs: 'newsFeed',
			templateUrl: 'app/news-feed/news-feed.tpl.html'
		})
		.otherwise({
			redirectTo: '/'
		});

	// enable HTML5 History API
	$locationProvider.html5Mode(true);
}