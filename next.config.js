/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	redirects: () => [
		{
			source: "/",
			destination: "/home",
			permanent: false,
		},
	],
};

module.exports = nextConfig;
