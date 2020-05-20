const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const path = require('path');

const nextConfig = {
	experimental: { css: true }
};

module.exports = withPlugins(
	[
		[
			withSass,
			{
				cssModules: false
			}
		],
		[
			withCSS,
			{
				cssLoaderOptions: {
					url: false
				}
			}
		]
	],
	nextConfig
);
