"use client";

import { useRouter } from "next/navigation";
import styles from "../../../page.module.css";

export default function StaticSection() {
  const router = useRouter();

  const handleClickSection = () => {
    window.nfStartSection({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {
      switch (res.status) {
        case "Success":
          router.push("section/return");
      }
    });
  };

  return (
    <div className={styles.common}>
      구간 제어를 적용해 봅시다.
      <br />
      <br />
      ● 세그먼트 설정
      <br />
      넷퍼넬 콘솔에서 진입 허용 수를 0으로 설정하여 구간 제어 세그먼트를 생성해주세요.
      <br />
      static/section 폴더의 page.tsx 파일을 열어주세요.
      <br />
      handleClickSection 함수의 <span className={styles.goldenrod}>PROJECT_KEY</span>와 <span className={styles.goldenrod}>SEGMENT_KEY</span>를 콘솔에서 확인한 프로젝트 키와 세그먼트 키로
      변경해주세요.
      <br />
      만약 실제 서비스에 적용하다가 타입 에러가 발생한다면 <span className={styles.goldenrod}>global.d.ts 파일을 참고</span>해주세요.
      <br />
      <br />
      ● 대기실 테스트
      <br />
      아래 버튼을 클릭하면 nfStartSection을 실행하고, 세그먼트에서 설정한 대기실이 노출됩니다.
      <br />
      진입 허용 수가 0이기 때문에 무조건 대기를 하게 되고, 세그먼트 설정에서 진입 허용 수를 1 이상으로 늘리면 대기실이 닫히고 section 페이지로 넘어갑니다.
      <br />
      nfStopSection 설정은 section 페이지로 넘어간 이후에 하겠습니다. static/section/return 폴더의 page.tsx를 열어주세요.
      <br />
      이제 아래 버튼을 눌러 대기실을 노출시키고, 진입 허용 수를 늘려 return 페이지로 넘어가 봅시다.
      <br />
      <button className={styles.blue} onClick={handleClickSection}>
        [Section]
      </button>
    </div>
  );
}
