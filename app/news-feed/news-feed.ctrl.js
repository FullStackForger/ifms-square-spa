"use strict"

angular
	.module('newsFeed')
	.controller('NewsFeed', NewsListController)

NewsListController.$inject = ['$scope', 'newsProxy']
function NewsListController($scope, newsProxy) {
	const mv = this

	mv.sortKey = 'created'
	mv.data = []
	mv.setSortKey = setSortKey

	init()

	function init () {
		newsProxy.getNews(function (data) {
			mv.data = data
		})
	}

	function setSortKey(sortKey) {
		if (mv.sortKey !== sortKey && mv.sortKey !== '-' + sortKey ) {
			mv.sortKey = '-' + sortKey
		} else if (mv.sortKey === '-' + sortKey) {
			mv.sortKey = mv.sortKey.substr(1)
		} else {
			mv.sortKey = '-' + sortKey
		}
	}
}