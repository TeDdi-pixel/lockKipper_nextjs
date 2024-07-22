/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/@vaults/my_vault',
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
