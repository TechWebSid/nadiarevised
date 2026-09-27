/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'heanlyharris-com.nimbus-cdn.uk',
      },
      {
        protocol: 'https',
        hostname: 'heanlyharris.com',
      },
    ],
  },
};

export default nextConfig;
