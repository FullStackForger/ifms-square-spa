'use strict'

describe('square.socialFilters', function () {
	describe('linkify', function () {

		var linkify;

		beforeEach(module('square.socialFilters'))
		beforeEach(inject(function ($filter) {
			linkify = $filter('linkify')
		}))


		it('should parse regular links', function () {
			var textIn = 'go to http://google.com'
			var textOut = 'go to <a href="http://google.com">http://google.com</a>'
			expect(linkify(textIn)).toBe(textOut)
		})

		it('should parse twitter @ mentiones', function () {
			var textIn = 'mention @indieforger'
			var textOut = 'mention <a href="https://twitter.com/indieforger" target="_blank">@indieforger</a>'
			expect(linkify(textIn)).toBe(textOut)
		})

		it('should parse twitter # hashtags', function () {
			var textIn = 'hash #indiegame'
			var textOut = 'hash <a href="https://twitter.com/search?q=%23indiegame" target="_blank">#indiegame</a>'
			expect(linkify(textIn)).toBe(textOut)
		})

	})
})