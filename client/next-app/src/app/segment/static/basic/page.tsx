"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../../../../styles/page.module.css";

export default function StaticBasic() {
  const router = useRouter();

  const handleClickBasic = () => {
    window.nfStart({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {
      switch (res.status) {
        case "Success":
          router.push("basic/target?setting=false");
      }
    });
  };

  return (
    <div className={styles.common}>
      <b className={styles.title}>2-1. 정적 적용</b>
      <br />
      정적 적용으로는 <span className={styles.yellow}>기본 제어</span>와 <span className={styles.yellow}>구간 제어</span>를 사용할 수 있습니다. 이 페이지에서는 기본 제어를 적용하는 방법을
      알아보겠습니다.
      <br />
      (바로 구간 제어에 대해 알아보고 싶으시다면, 오른쪽 버튼을 누르새요.{" "}
      <Link href="/segment/static/section" className={styles.blue}>
        [구간 제어]
      </Link>
      )
      <br />
      <br />
      <b className={styles.subTitle}>기본 제어</b>
      <br />
      1) 세그먼트 설정
      <br />
      넷퍼넬 콘솔에서 진입 허용 수를 0으로 설정하여 기본 제어 세그먼트를 생성해주세요.
      <br />
      <span className={styles.green}>/src/app/segment/static/basic/page.tsx</span> 파일을 열어주세요.
      <br />
      handleClickBasic 함수의 <span className={styles.yellow}>PROJECT_KEY</span>와 <span className={styles.yellow}>SEGMENT_KEY</span>를 넷퍼넬 콘솔에서 확인한 프로젝트 키와 세그먼트 키로 변경해주세요.
      <br />
      (프로젝트 키는 넷퍼넬 콘솔 - 프로젝트 - SNB - 프로젝트 명 아래 "service_"로 시작하는 값입니다. 해당 텍스트를 클릭하면 복사됩니다.)
      <br />
      만약 실제 서비스에 적용하다가 타입 에러가 발생한다면 <span className={styles.yellow}>global.d.ts</span> 파일을 참고해주세요.
      <br />
      이제 target 페이지에 진입 후 nfStop를 함수가 실행되도록 해야 합니다.
      <br />
      <span className={styles.green}>/src/app/segment/static/basic/target/page.tsx</span> 파일을 열고, 아래 버튼을 눌러주세요.
      <br />
      <Link href="basic/target?setting=true" className={styles.blue}>
        [Navigate to Target Page]
      </Link>
      <br />
      <br />
      2) 대기실 테스트
      <br />
      이제 실제 대기실이 화면에서 어떻게 동작하는지 보겠습니다.
      <br />
      아래 버튼을 클릭하면 nfStart를 실행하고, 세그먼트에서 설정한 대기실이 노출됩니다.
      <br />
      위에서 세그먼트를 생성할 때 진입 허용 수를 0으로 설정했기 때문에 무조건 대기를 하게 됩니다.
      <br />
      target 페이지에서는 nfStop이 실행되고 진입한 키를 반납하여 진입 완료처리가 됩니다.
      <br />
      이제 아래 버튼을 눌러 대기실을 노출시키고, 넷퍼넬 콘솔에서 현재 세그먼트의 진입 허용 수를 1 이상으로 늘려 target 페이지로 넘어가 봅시다.
      <br />
      <button className={styles.blue} onClick={handleClickBasic}>
        [Navigate to Target Page]
      </button>
    </div>
  );
}
