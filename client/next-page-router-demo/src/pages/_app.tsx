import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "../styles/page.module.css";
import InitializeNFScript from "@/components/InitializeNFScript";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NetFUNNEL Demo</title>
        <meta name="description" content="넷퍼넬 에이전트 설치를 돕기 위한 데모앱입니다" />
      </Head>
      <main>
        {/* agent에서 window 객체를 사용하기 때문에 _애 */}
        <InitializeNFScript />
        <div className={styles.gnb}>NetFUNNEL Javascript agent guide for Next.js (page router)</div>
        <Component {...pageProps} />
      </main>
    </>
  );
}
