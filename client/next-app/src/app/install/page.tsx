"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/page.module.css";
import Link from "next/link";

export default function Install() {
  const [isAgentInitialized, setIsAgentInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (typeof window.nfStart === "function") setIsAgentInitialized(true);
    }, 1000);
  }, []);

  return (
    <div className={styles.common}>
      <b className={styles.title}>에이전트 설치</b>
      <br />
      <p className={styles.sub_title}>1. 넷퍼넬 콘솔에서 설치 코드 확인</p>
      <a href="https://console.stclab.com/" target="_blank" className={styles.blue}>
        https://console.stclab.com
      </a>{" "}
      로 진입하여 로그인한 후, 넷퍼넬 콘솔로 이동해주세요.
      <br />
      넷퍼넬 콘솔의 에이전트 - 클라이언트 측 에이전트 - JavaScript 페이지로 이동해주세요.
      <br />
      (1 - 2 - (3) 순서로 클릭하시면 됩니다.)
      <br />
      <Image alt="console_agent_navi" src="/images/console_agent_navi.png" width={562} height={512} />
      <br />
      <br />
      <p className={styles.sub_title}>2. 설치 코드 적용</p>
      HTML 파일 코드를 참고하여 데모앱에 에이전트를 설치하겠습니다.
      <br />
      <span className={styles.green}>/src/components/InitializeNFScript.tsx</span> 파일을 열고,
      <br />
      넷퍼넬 콘솔의 HTML 파일 코드 내용을 <span className={styles.yellow}>InitializeNFScript</span> 파일에 붙여넣기 해주세요. (같은 번호의 위치에 넣어주시면 됩니다.)
      <br />
      <br />
      <div className={styles.flex}>
        <div className={styles.image_box}>
          <span className={styles.gray}>{`<HTML 파일 코드>`}</span>
          <Image alt="console_agent_html_code" src="/images/console_agent_html_code.png" width={580} height={400} />
        </div>
        <div className={styles.image_box}>
          <span className={styles.gray}>{`<InitializeNFScript>`}</span>
          <Image alt="app_agent_html_code" src="/images/app_agent_html_code.png" width={380} height={480} />
        </div>
      </div>
      <br />
      <p className={styles.sub_title}>3. InitializeNFScript 삽입</p>
      넷퍼넬 스크립트를 넣는 위치는 프레임워크에 따라 조금씩 다릅니다.
      <br />
      현재 진행 중인 데모앱은 <span className={styles.yellow}>app router</span> 방식이기 때문에 <span className={styles.green}>/app/layout.tsx</span> 파일의 {`<body>`} 태그 안에 삽입합니다.
      <Image alt="app_import_agent_code" src="/images/app_import_agent_code.png" width={480} height={480} />
      <br />
      <span className={styles.yellow}>page router</span> 방식의 경우, {`<InitializeNFScript />`}를 <span className={styles.green}>/pages/_app.tsx</span>의 Body 컴포넌트 안에 넣어주세요.
      <br />
      <span className={styles.yellow}>react</span>의 경우, HTML 파일 코드를 복사하여 <span className={styles.green}>/public/index.html</span>의 {`<head>`} 태그 안에 넣어주세요.
      <br />
      <br />
      <p className={styles.sub_title}>4. 에이전트 설치 확인</p>
      에이전트 설치가 끝났습니다. 브라우저에서 에이전트 파일을 잘 불러오는지 확인합시다.
      <br />
      새로고침을 한 후, 아래 텍스트의 글자색이 초록색이 된다면 브라우저에서 에이전트 파일이 실행되고 있습니다.
      <br />
      <b className={isAgentInitialized ? styles.green : styles.red}>에이전트 설치 완료 {isAgentInitialized ? "✔︎" : "✘"}</b>
      <br />
      <br />
      이제{" "}
      <Link href="/segment" className={styles.gnb_btn}>
        세그먼트 ⇲
      </Link>{" "}
      를 눌러 세그먼트에 대해 알아봅시다.
    </div>
  );
}
