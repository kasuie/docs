/*
 * @Author: kasuie
 * @Date: 2023-09-04 15:01:26
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-19 13:51:23
 * @Description: 
 */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  async rewrites() {
    const ret = [
      {
        source: "/api/:path*",
        destination: "http://kasuie.cc:8001/:path*",
        // destination: "http://localhost:3001/api/:path*",
      },
    ];
    return {
      beforeFiles: ret,
    };
  },
}

module.exports = withNextra({ ...nextConfig })
