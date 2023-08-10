/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
    ],
  },
  generateBuildId: async () => {
    // You can add a unique identifier here, such as the current timestamp
    return 'my-build-' + Date.now();
  },
  onDemandEntries: {
    // This will disable the on-demand entries feature
    maxInactiveAge: 0,
  },
  // This will disable the etag feature
  generateEtags: false,
}

module.exports = nextConfig
