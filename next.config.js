// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {  
  images: {
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
    webpackBuildWorker: true // Enable for better handling of complex builds
  },
  reactStrictMode: true,
  swcMinify: true,  webpack: (config, { isServer }) => {
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
