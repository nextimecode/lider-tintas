/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.graphassets.com',
      'ipdata.co',
      'firebasestorage.googleapis.com',
      'files.stripe.com'
    ]
  }
}

module.exports = nextConfig
