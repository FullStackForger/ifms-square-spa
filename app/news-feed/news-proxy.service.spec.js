'use strict'
var internal = {}

describe('square.newsFeed', function () {
	describe('newsProxyService', function () {
		var newsProxy;

		beforeEach(function () {
			internal.mockDependencies()
			inject(function ($injector) {
				newsProxy = $injector.get('newsProxy')
			})
		})

		it('should have getNews() method', function () {
			expect(newsProxy.getNews).toBeDefined()
			expect(typeof newsProxy.getNews).toBe('function')
		})

		it('should fetch data from endpoint', function () {
			newsProxy.getNews(function () {})
			expect(internal.httpServiceMock.get).toHaveBeenCalled()
			expect(internal.httpServiceMock.get.calls.count()).toEqual(1)
		})

		it('should fetch data from endpoint', function () {
			newsProxy.getNews(internal.getNewsMockCallback)
			expect(internal.getNewsMockCallback).toHaveBeenCalled()
			expect(internal.getNewsMockCallback.calls.count()).toEqual(1)
		})

	})
})


internal.mockDependencies = function() {
	module('square.newsFeed')
	module(function($provide) {
		$provide.value('linkifyFilter', internal.linkifyFilterMock )
		$provide.value('$http', internal.httpServiceMock )
	})

}

internal.linkifyFilterMock = function () {
	return function (input) {
		return input
	}
}

internal.httpServiceMock = {
	// faking $http.get promise response
	get: jasmine.createSpy().and.callFake(function() {
		return {
			then: function(callback) { return callback({data: []}); }
		}
	})
}

internal.getNewsMockCallback = jasmine.createSpy()