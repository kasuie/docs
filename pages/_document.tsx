/*
 * @Author: kasuie
 * @Date: 2023-02-14 17:57:28
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-04 15:54:27
 * @Description:
 */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content="KASUIEの文档" />
          <meta
            name="description"
            content="KASUIEの次元，兴趣至上，内容随缘，ACG二次元爱好"
          />
          <meta name="author" content="KASUIE" />
          {/* <Script
            strategy={"lazyOnload"}
            src="https://hm.baidu.com/hm.js?74eeedb90adb10a4f94f61446acf3500"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
