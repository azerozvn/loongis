const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
	[
		withCSS({
			cssLoaderOptions: {
				url: false
			}
		})
	],
	{ experimental: { css: true } }
);
