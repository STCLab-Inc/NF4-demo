import Head from "next/head";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>NetFUNNEL Demo</title>
        <meta name="description" content="넷퍼넬 에이전트 설치를 돕기 위한 데모앱입니다" />
      </Head>
      <main className={styles.common}>
        반갑습니다. 넷퍼넬 에이전트를 적용하기 위한 데모 앱입니다.
        <br />
        넷퍼넬 에이전트 설치부터 대기실 노출까지 과정을 설명드리겠습니다.
        <br />
        <br />
      </main>
    </>
  );
}
