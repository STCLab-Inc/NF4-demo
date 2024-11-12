"use client";

import { useRouter } from "next/navigation";
import styles from "../../../../styles/page.module.css";

export default function StaticSection() {
  const router = useRouter();

  const handleClickSection = () => {
    window.nfStartSection({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {
      switch (res.status) {
        case "Success":
          router.push("section/target");
      }
    });
  };

  return (
    <div className={styles.common}>
      <b className={styles.subTitle}>구간 제어</b>
      <br />
      1) 세그먼트 설정
      <br />
      넷퍼넬 콘솔에서 진입 허용 수를 0으로 설정하여 구간 제어 세그먼트를 생성해주세요.
      <br />
      <span className={styles.gray}>/src/app/segment/static/section/page.tsx</span> 파일을 열어주세요.
      <br />
      handleClickSection 함수의 <span className={styles.yellow}>PROJECT_KEY</span>와 <span className={styles.yellow}>SEGMENT_KEY</span>를 콘솔에서 확인한 프로젝트 키와 세그먼트 키로 변경해주세요.
      <br />
      (프로젝트 키는 넷퍼넬 콘솔 - 프로젝트 - SNB - 프로젝트 명 아래 "service_"로 시작하는 값입니다. 해당 텍스트를 클릭하면 복사됩니다.)
      <br />
      만약 실제 서비스에 적용하다가 타입 에러가 발생한다면 <span className={styles.yellow}>global.d.ts</span> 파일을 참고해주세요.
      <br />
      <br />
      2. 대기실 테스트
      <br />
      아래 버튼을 클릭하면 nfStartSection을 실행하고, 세그먼트에서 설정한 대기실이 노출됩니다.
      <br />
      위에서 세그먼트를 생성할 때 진입 허용 수를 0으로 설정했기 때문에 무조건 대기를 하게 됩니다.
      <br />
      nfStopSection 설정은 section 페이지로 넘어간 이후에 하겠습니다. <span className={styles.gray}>/src/app/segment/static/section/target/page.tsx</span> 파일을 열어주세요.
      <br />
      이제 아래 버튼을 눌러 대기실을 노출시키고, 넷퍼넬 콘솔에서 현재 세그먼트의 진입 허용 수를 1 이상으로 늘려 target 페이지로 넘어가 봅시다.
      <br />
      <button className={styles.blue} onClick={handleClickSection}>
        [Navigate to Target Page]
      </button>
    </div>
  );
}
