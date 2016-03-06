'use strict'

describe('square.newsFeed', function () {
	describe('NewsFeedCtrl', function () {
		let $rootScope, $scope, controller
		let newsProxy = {}
		let linkifyFilter = {}

		function linkifyFilterMock() {
			return function (input) { return input }
		}

		beforeEach(module('square.newsFeed'))

		beforeEach(function() {
			module(function($provide) {
				$provide.value('linkifyFilter', linkifyFilterMock )
			})
		})

		beforeEach(inject(function($rootScope, $controller) {
			$scope = $rootScope.$new()
			controller = $controller('NewsFeedCtrl', {$scope: $scope})
		}))


		describe('default values', function () {

			it('should have sort key set to "created"', function () {
				expect(controller.sortKey).toEqual('created')
			})

			it('should have empty data on init', function () {
				expect(controller.data).toBeDefined()
				expect(controller.data).toEqual([])
			})


		})

		/*
		describe('init', function () {
			it('should auto execute', function () {
				throw new Error('Not implemented')
			})

			it('should load news data', function () {
				throw new Error('Not implemented')
			})
		})

		describe('setSortKey', function () {
			it('should update sort key', function () {
				throw new Error('Not implemented')
			})
		})
		*/

	})
})