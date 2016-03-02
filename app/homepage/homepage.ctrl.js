"use strict"
angular
	.module('square.homePage')
	.controller('HomePageCtrl', HomePageCtrl)

function HomePageCtrl($scope) {
	$scope = this
	$scope.text = "Welcome to Twitter filter"
}