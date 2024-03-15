/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
};

export default nextConfig;
