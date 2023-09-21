/*
 * @Author: kasuie
 * @Date: 2023-09-04 15:01:26
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-21 09:56:41
 * @Description:
 */
import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Footer from "./components/footer";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Docs</span>,  
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Docs'
      }
    } else {
      return {
        titleTemplate: 'API Docs'
      }
    }
  },
  search: {
    placeholder: "输入关键词搜索"
  },
  project: {
    link: "https://github.com/kasuie",
  },
  darkMode: true,
  direction: "ltr",
  docsRepositoryBase: "https://github.com/kasuie/docs/blob/main",
  editLink: {
    text: '编辑此页面 →'
  },
  feedback: {
    content: '提交疑问或bug →',
    labels: 'feedback'
  },
  toc: {
    backToTop: true,
  },
  footer: {
    text: <Footer text={'© 2020 - 2023 By KASUIE'} />,
  },
};

export default config;
