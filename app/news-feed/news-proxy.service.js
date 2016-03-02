"use strict"

angular
	.module('square.newsFeed')
	.service('newsProxy', NewsProxy)

NewsProxy.$inject = ['$http']
function NewsProxy($http) {

	this.getNews = function (cb) {
		$http
			.get('/data/news-feed.json')
			.then((jsonData) => {
				cb(parseFeedData(jsonData.data))
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
}