"use strict"
angular
	.module('square.homePage')
	.controller('HomePageCtrl', HomePageCtrl)

function HomePageCtrl($scope) {
	$scope.text = "Welcome to Twitter filter"
}