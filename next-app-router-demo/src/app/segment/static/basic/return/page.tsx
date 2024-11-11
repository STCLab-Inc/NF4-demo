"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import styles from "../../../../page.module.css";

export default function BasicReturn() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClickPrevPage = () => {
    router.back();
  };

  useEffect(() => {
    if (typeof window.nfStop === "function") {
      window.nfStop({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {});
    }
  }, []);

  if (searchParams[1] === "true")
    return (
      <div className={styles.common}>
        페이지 진입 후 nfStop 함수를 호출하여 넷퍼넬 키를 반납해야 합니다.
        <br />
        <br />
        useEffect 내의 <span className={styles.goldenrod}>PROJECT_KEY</span>와 <span className={styles.goldenrod}>SEGMENT_KEY</span>에 이전 페이지에서 입력했던 프로젝트 키와 세그먼트 키를 넣고
        저장하세요.
        <br />
        이제 페이지를 로드할 때 nfStop 함수가 호출되고, 이전에 받았던 넷퍼넬 키를 반납하여 진입 완료 처리를 하게 됩니다.
        <br />
        다시 static/basic 폴더의 page.tsx 파일을 열고 아래 버튼을 눌러 대기실 테스트를 봐주세요.
        <br />
        <button className={styles.blue} onClick={handleClickPrevPage}>
          [이전 페이지]
        </button>
      </div>
    );

  return (
    <div className={styles.common}>
      기본 제어 테스트를 마쳤습니다. 아래 버튼을 눌러 구간 제어를 적용해봅시다.
      <br />
      <Link className={styles.blue} href="/segment/static/section">
        [구간 제어]
      </Link>
      <br />
      <br />
      동적 적용에 대해 알아보고 싶으시다면 아래 버튼을 눌러주세요.
      <br />
      <Link className={styles.blue} href="/segment">
        [세그먼트]
      </Link>
    </div>
  );
}
