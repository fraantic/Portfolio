/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ['res.cloudinary.com','assets-global.website-files.com'],
  },
}

module.exports = nextConfig
