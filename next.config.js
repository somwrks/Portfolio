/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
    }

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com',"i.ibb.co","i.imgur.com"],
  },
}

module.exports = nextConfig
