"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../../../../../styles/page.module.css";

export default function SectionTarget() {
  const [isKeyReturned, setIsKeyReturned] = useState(false);

  const handleClickStopSection = () => {
    window.nfStopSection({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {
      switch (res.status) {
        case "Complete":
          setIsKeyReturned(true);
      }
    });
  };

  return (
    <div className={styles.common}>
      <p className={styles.sub_title}>진입 완료 처리</p>
      현재 페이지에서 <span className={styles.yellow}>nfStopSection</span>을 실행하여 진입 완료 처리해 봅시다.
      <br />
      <br />
      <b>1. 진입 완료 설정</b>
      <br />
      1-1. <span className={styles.green}>/src/app/segment/static/section/target.tsx</span> 파일을 열어주세요.
      <br />
      1-2. 아래 그림을 참고하여 nfStopSection 함수에 <span className={styles.yellow}>프로젝트 키</span>와 <span className={styles.yellow}>세그먼트 키</span>를 넣어주세요.
      <Image alt="app_static_section_target" src="/images/app_static_section_target.png" width={800} height={240} />
      <br />
      <br />
      <b>2. 진입 완료 실행</b>
      <br />
      2-1. 아래 버튼을 클릭하면 nfStopSection 함수가 호출되고, 진입 완료 처리를 합니다.
      <br />
      <button className={styles.blue} onClick={handleClickStopSection}>
        [Stop Section]
      </button>
      <br />
      2-2. 진입 완료 처리가 정상적으로 처리되었다면 아래 텍스트의 글자색이 초록색이 됩니다.
      <br />
      <b className={isKeyReturned ? styles.green : styles.red}>키 반납 완료 {isKeyReturned ? "✔︎" : "✘"}</b>
      <br />
      <br />
      정적 적용의 구간 제어 테스트가 끝났습니다.
      <br />
    </div>
  );
}
