/*
 * @Author: kasuie
 * @Date: 2023-09-04 15:01:26
 * @LastEditors: kasuie
 * @LastEditTime: 2024-11-11 18:32:07
 * @Description:
 */
import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Footer from "./components/footer";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Docs</span>,
  // useNextSeoProps() {
  //   const { asPath } = useRouter();
  //   if (asPath !== "/") {
  //     return {
  //       titleTemplate: "%s – Docs",
  //     };
  //   } else {
  //     return {
  //       title: "API Docs",
  //     };
  //   }
  // },
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const url =
      "https://docs.kasuie.cc" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const atitle = asPath !== "/" ? `${title} - Docs` : "KASUIEの文档";

    return (
      <>
        <title>{atitle}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
      </>
    );
  },
  search: {
    placeholder: "输入关键词搜索",
  },
  project: {
    link: "https://github.com/kasuie",
  },
  darkMode: true,
  direction: "ltr",
  docsRepositoryBase: "https://github.com/kasuie/docs/blob/main",
  editLink: {
    content: "编辑此页面 →",
  },
  feedback: {
    content: "提交疑问或bug →",
    labels: "feedback",
  },
  toc: {
    backToTop: true,
  },
  footer: {
    content: <Footer text={"© 2020 - 2023 By KASUIE"} />,
  },
};

export default config;
