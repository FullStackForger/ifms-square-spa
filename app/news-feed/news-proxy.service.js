"use strict"

angular
	.module('square.newsFeed')
	.service('newsProxy', NewsProxy)

NewsProxy.$inject = ['$http', 'linkifyFilter']
function NewsProxy($http, linkifyFilter) {

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
				userUrl: linkifyFilter('@'+data.user.screen_name),
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