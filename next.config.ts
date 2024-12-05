/*
 * @Author: kasuie
 * @Date: 2023-09-04 15:01:26
 * @LastEditors: kasuie
 * @LastEditTime: 2024-12-05 20:45:15
 * @Description:
 */
import { NextConfig } from "next";
import nextra from "nextra";
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://kasuie.cc/apis/:path*",
        // destination: "http://localhost:3001/api/:path*",
      },
    ];
  },
};

module.exports = withNextra({ ...nextConfig });
