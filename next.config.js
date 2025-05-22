// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {    images: {
    domains: [
      'steelmade-products.cdn.com'
    ],
    deviceSizes: [640, 1080, 1920], // Simplified device sizes
    imageSizes: [32, 96, 256], // Simplified image sizes
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // All experimental features disabled to prevent build errors
    // optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons'],
    // webpackBuildWorker: true
  },  reactStrictMode: true,
  swcMinify: true,
  // Simplified webpack config
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  // Simplified redirects to avoid regex complexity issues
  async redirects() {
    return [
      {
        source: '/collections/:path*',
        destination: '/:path*',
        permanent: true
      },
      {
        source: '/products/:path*',
        destination: '/:path*',
        permanent: true
      }
    ]
  }
};

module.exports = nextConfig;
