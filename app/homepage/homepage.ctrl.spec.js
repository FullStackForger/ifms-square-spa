"use strict";
describe ('square.homePage', function () {
	describe('HomePageCtrl', function () {
		let $rootScope, $scope, controller

		beforeEach(function() {
			module('square.homePage')
			inject(function ($injector) {
				$rootScope = $injector.get('$rootScope')
				$scope = $rootScope.$new()
				controller = $injector.get('$controller')('HomePageCtrl', {$scope: $scope})
			})
		})

		it('should instantiate text', function () {
			expect($scope.text).toEqual('Welcome to Twitter filter')
		})

	})
})
