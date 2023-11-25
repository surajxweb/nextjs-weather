/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherbit.io", // Replace with the correct hostname
        port: "",
        pathname: "/static/img/icons/**", // Adjust the pathname pattern
      },
    ],
  },
};

module.exports = nextConfig;
