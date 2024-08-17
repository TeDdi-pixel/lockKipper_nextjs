/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/vaults/my_vault',
            permanent: true,
          },
        ];
      },
      images: {
        domains: ['firebasestorage.googleapis.com']
      },
};

export default nextConfig;
