import type { AppProps } from "next/app";
import "@/styles/globals.css";
import styles from "../styles/page.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className={styles.gnb}>NetFUNNEL Javascript agent guide for Next.js (page router)</div>
      <Component {...pageProps} />;
    </main>
  );
}
