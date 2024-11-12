import Link from "next/link";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.common}>
      반갑습니다. 넷퍼넬 에이전트를 적용하기 위한 데모 앱입니다.
      <br />
      넷퍼넬 에이전트 설치부터 대기실 노출까지 과정을 설명드리겠습니다.
      <br />
      <br />
      <b className={styles.title}>1. 넷퍼넬 에이전트 스크립트 적용</b>
      <br />
      <a href="https://console.stclab.com/" target="_blank" className={styles.blue}>
        https://console.stclab.com
      </a>{" "}
      로 진입하여 로그인한 후, 넷퍼넬 콘솔로 이동해주세요.
      <br />
      넷퍼넬 콘솔의 에이전트 - 클라이언트 측 에이전트 - JavaScript 페이지로 이동해주세요.
      <br />
      코드 편집기로 돌아와서 <span className={styles.green}>/src/components/InitializeNFScript.tsx</span> 파일을 열고, 넷퍼넬 콘솔의 JavaScript 페이지의 2-1 스니펫 코드와 비교하여 아래 텍스트를
      스니펫에 있는 주소로 변경하고 저장하세요.
      <br />
      <span className={styles.yellow}>
        - NF_AGENT_JS
        <br />- NF_SERVER_URL
        <br />- SETTING_URL
        <br />- VWR_PAGE_URL
        <br />- EUM_BROWSER_JS
        <br />- EUM_SERVER_URL
        <br />- SETTING_URL
      </span>
      <br />
      만약 실제 서비스에 적용하다가 타입 에러가 발생한다면 <span className={styles.yellow}>global.d.ts</span> 파일을 참고해주세요.
      <br />
      InitializeNFScript는 <span className={styles.green}>/src/app/layout.tsx</span>에 삽입해두었으니 참고해주세요.
      <br />
      (page router 방식일 경우, _app.tsx에 넣어주세요.)
      <br />
      에이전트 스크립트 적용이 끝났습니다. 브라우저에서 에이전트 파일을 잘 불러오는지 확인합시다.
      <br />
      데모 화면에서 개발자 도구 - 네트워크 탭을 열고 새로고침해보세요. 아래 파일들을 불러온다면 브라우저에서 에이전트가 동작하고 있습니다.
      <br />
      <span className={styles.yellow}>
        - netfunnel-javascript-agent.js
        <br />- eum-browser.js
        <br />- nf-setting.json
      </span>
      <br />
      <br />
      이제{" "}
      <Link href={"/segment"} className={styles.blue}>
        세그먼트 설정
      </Link>
      에 대해 알아봅시다.
    </div>
  );
}