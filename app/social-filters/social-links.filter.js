'use strict'
// source: https://gist.github.com/rishabhmhjn/7028079
//
// usage:
// 1. install and include ngSanitise
//    > bower install angular-sanitize --save
// 2. use ng-bind-html directive in the template to allow html tags, eg.:
//    <div ng-bind-html="property | linkify"></div>
var app = angular.module('socialFilters', ['ngSanitize']);

app.filter('linkify', socialLinks);

socialLinks.$inject = ['$filter', '$sce']
function socialLinks ($filter, $sce) {
	return function(text, target) {
		if (!text) return text;

		// use ng-sanitize linky filter for auto-link geneation
		var replacedText = $filter('linky')(text, target);
		var targetAttr = '';
		if (angular.isDefined(target)) {
			targetAttr = ' target="' + target + '"';
		}

		// replace #hashtags
		var replacePattern1 = /(^|\s)#(\w*[a-zA-Z_]+\w*)/gim;
		replacedText = replacedText.replace(replacePattern1, '$1<a href="https://twitter.com/search?q=%23$2"' + targetAttr + ' target="_blank">#$2</a>');

		// replace @mentions
		var replacePattern2 = /(^|\s)\@(\w*[a-zA-Z_]+\w*)/gim;
		replacedText = replacedText.replace(replacePattern2, '$1<a href="https://twitter.com/$2"' + targetAttr + ' target="_blank">@$2</a>');

		$sce.trustAsHtml(replacedText);
		return replacedText;
	};
}