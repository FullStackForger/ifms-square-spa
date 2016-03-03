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
			controllerAs: 'homePage',
			template: '<p>{{homePage.text}}</p>'
		})
		.when('/newsfeed', {
			controller: 'NewsFeedCtrl',
			controllerAs: 'newsFeed',
			templateUrl: 'app/news-feed/news-feed.tpl.html'
		})
		.otherwise({
			redirectTo: '/homepage'
		});

	// enable HTML5 History API
	$locationProvider.html5Mode(true);
}