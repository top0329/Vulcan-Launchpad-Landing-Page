/** @type {import('next').NextConfig} */
const nextConfig = {
    // "output": "export",
    reactStrictMode: false,
    webpack: (config) => {
    //   config.resolve.fallback = { fs: false };
      return config;
    },
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    // distDir: 'dist',
  };
  
  export default nextConfig;
  