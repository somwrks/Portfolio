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
   experimental: {
     turbo: {
       resolveAlias: {
         canvas: './empty-module.ts',
   },
     },
   },
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com',"i.ibb.co","i.imgur.com",'picsum.photos'],
  },
  env:{
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_RESUME_LINK: process.env.NEXT_PUBLIC_RESUME_LINK,
    NEXT_PUBLIC_FREELANCE_LINK: process.env.NEXT_PUBLIC_FREELANCE_LINK,
  }
}

module.exports = nextConfig
