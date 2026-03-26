// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   experimental: {
//     optimizeCss: false,
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizeCss: false,
  },
  compiler: {
    removeConsole: false,
  },
  // 👇 ye add karo
  optimizeFonts: false,
};

export default nextConfig;