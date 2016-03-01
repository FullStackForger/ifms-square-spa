"use strict"

angular
	.module('newsFeed')
	.controller('NewsFeed', NewsListController)

NewsListController.$inject = ['$scope', '$http']
function NewsListController($scope, $http) {
	this.data = []

	$http.get('/data/news-feed.json').then((jsonData) => {
		this.data = jsonData.data
	})
}