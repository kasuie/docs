/*
 * @Author: kasuie
 * @Date: 2023-09-04 15:01:26
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-04 18:06:08
 * @Description:
 */
import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>KasuieのDocs</span>,
  project: {
    link: "https://github.com/kasuie",
  },
  chat: {
    link: "https://discord.com",
  },
  darkMode: true,
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "© 2020 - 2023 By KASUIE.",
  },
};

export default config;
