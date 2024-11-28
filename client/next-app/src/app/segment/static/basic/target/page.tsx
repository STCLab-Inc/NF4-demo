"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../../styles/page.module.css";
import Image from "next/image";

export default function BasicTarget() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isKeyReturned, setIsKeyReturned] = useState(false);

  useEffect(() => {
    window.nfStop({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {
      switch (res.status) {
        case "Complete":
          setIsKeyReturned(true);
      }
    });
  }, []);

  const handleClickPrevPage = () => {
    router.back();
  };

  if (searchParams[1] === "true")
    return (
      <div className={styles.common}>
        <p className={styles.sub_title}>진입 완료 처리</p>
        타겟 페이지 진입 후 nfStop 함수를 호출하여 진입 완료 처리를 해야합니다.
        <br />
        <span className={styles.green}>/src/app/segment/static/basic/target/page.tsx</span> 파일을 열어주세요.
        <br />
        아래 그림을 참고하여 nfStop 함수에 <span className={styles.yellow}>프로젝트 키</span>와 <span className={styles.yellow}>세그먼트 키</span>를 넣어주세요.
        <br />
        <Image alt="app_static_basic_target" src="/images/app_static_basic_target.png" width={800} height={280} />
        <br />
        이제 이 페이지를 로드할 때 nfStop 함수가 호출되고, 이전에 받았던 넷퍼넬 키를 반납하여 진입 완료 처리를 하게 됩니다.
        <br />
        다시 <span className={styles.green}>/src/app/segment/static/basic/page.tsx</span> 파일을 열고 아래 버튼을 눌러 <b>2. 대기실 테스트</b> 단계를 진행해주세요.
        <br />
        <button className={styles.blue} onClick={handleClickPrevPage}>
          이전 페이지 ⇲
        </button>
      </div>
    );

  return (
    <div className={styles.common}>
      정적 적용의 기본 제어 테스트가 끝났습니다.
      <br />
      진입 완료 처리가 정상적으로 처리되었다면 아래 텍스트의 글자색이 초록색이 됩니다.
      <br />
      <b className={isKeyReturned ? styles.green : styles.red}>키 반납 완료 {isKeyReturned ? "✔︎" : "✘"}</b>
      <br />
      <br />
      아래 버튼을 눌러 구간 제어를 적용해봅시다.
      <br />
      <Link className={styles.blue} href="/segment/static/section">
        구간 제어 ⇲
      </Link>
      <br />
    </div>
  );
}
