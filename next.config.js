/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media-cdn.tripadvisor.com', 'themoviedb.org'],
  },
}

module.exports = nextConfig
