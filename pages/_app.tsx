/*
 * @Author: kasuie
 * @Date: 2023-02-10 11:13:02
 * @LastEditors: kasuie
 * @LastEditTime: 2025-06-10 15:09:06
 * @Description:
 */
import "./globals.css";
import Head from 'next/head'

export default function App({ Component, pageProps }: any) {
  return <>
      <Head>
        <title>Kasuie の Docs</title>
      </Head>
    <Component {...pageProps} />
  </>;
}
