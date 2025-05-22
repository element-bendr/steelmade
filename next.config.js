// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {  images: {
    domains: [
      'steelmade-products.cdn.com'
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // optimizeCss: true, // Disabled to prevent Maximum call stack size exceeded error
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },  async redirects() {
    return [
      // {
      //   source: '/:category/:seriesId',
      //   destination: '/products/:category/:seriesId',
      //   permanent: true
      // },
      {
        source: '/collections/:category/:seriesId',
        destination: '/:category/:seriesId', // Updated destination
        permanent: true
      },
      { // New redirect for old product URLs
        source: '/products/:category/:seriesId/:productId',
        destination: '/:category/:seriesId/:productId',
        permanent: true
      },
      { // Added redirect for series pages under /products
        source: '/products/:category/:seriesId',
        destination: '/:category/:seriesId',
        permanent: true
      }
    ]
  }
};

module.exports = nextConfig;
