/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      { 
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
      },
      { // Add this new entry
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '', 
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
      }
    ]
  }
 };
 
 export default nextConfig;
 