/*
 * @Author: kasuie
 * @Date: 2024-05-21 19:39:43
 * @LastEditors: kasuie
 * @LastEditTime: 2024-05-22 11:20:31
 * @Description:
 */
import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
