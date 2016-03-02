"use strict"

angular
	.module('newsFeed')
	.controller('NewsFeed', NewsListController)

NewsListController.$inject = ['$scope', '$http']
function NewsListController($scope, $http) {
	const mv = this

	mv.sortKey = 'created'
	mv.data = []
	mv.setSortKey = setSortKey

	function init () {
		$http.get('/data/news-feed.json').then((jsonData) => {
			mv.data = parseFeedData(jsonData.data)
		})
	}

	function parseFeedData(feedData) {
		return Array.prototype.map.call(feedData, (data) => {
			return {
				id: data.id,
				user: data.user,
				created: new Date(data.created_at),
				text: data.text,
				actions: {
					total: data.favorite_count + data.retweet_count,
					favorites: data.favorite_count,
					retweets: data.retweet_count
				}
			}
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

	init()
}