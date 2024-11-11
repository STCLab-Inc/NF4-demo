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
          router.push("basic/return?setting=false");
      }
    });
  };

  return (
    <div className={styles.common}>
      정적 적용으로는 <span className={styles.goldenrod}>기본 제어</span>와 <span className={styles.goldenrod}>구간 제어</span>를 사용할 수 있습니다. 이 페이지에서는 기본 제어를 적용하는 방법을
      알아보겠습니다.
      <br />( 바로 구간 제어에 대해 알아보고 싶으시다면, 오른쪽 버튼을 누르새요.{" "}
      <Link href="/segment/static/section" className={styles.blue}>
        [구간 제어]
      </Link>{" "}
      )
      <br />
      <br />
      <b className={styles.title}>기본 제어</b>
      <br />
      ● 세그먼트 설정
      <br />
      넷퍼넬 콘솔에서 진입 허용 수를 0으로 설정하여 기본 제어 세그먼트를 생성해주세요.
      <br />
      static/basic 폴더의 page.tsx 파일을 열어주세요.
      <br />
      handleClickBasic 함수의 <span className={styles.goldenrod}>PROJECT_KEY</span>와 <span className={styles.goldenrod}>SEGMENT_KEY</span>를 콘솔에서 확인한 프로젝트 키와 세그먼트 키로 변경해주세요.
      <br />
      만약 실제 서비스에 적용하다가 타입 에러가 발생한다면 <span className={styles.goldenrod}>global.d.ts 파일을 참고</span>해주세요.
      <br />
      페이지 진입 후 nfStop를 함수가 실행되도록 하기 위해 static/basic/return 폴더의 page.tsx 파일을 열고, 아래 버튼을 눌러주세요.
      <br />
      <Link href="basic/return?setting=true" className={styles.blue}>
        [Basic]
      </Link>
      <br />
      <br />
      ● 대기실 테스트
      <br />
      이제 실제 대기실이 화면에서 어떻게 동작하는지 보겠습니다.
      <br />
      아래 버튼을 클릭하면 nfStart를 실행하고, 세그먼트에서 설정한 대기실이 노출됩니다.
      <br />
      진입 허용 수가 0이기 때문에 무조건 대기를 하게 되고, 세그먼트 설정에서 진입 허용 수를 1 이상으로 늘리면 대기실이 닫히고 basic 페이지로 넘어갑니다.
      <br />
      basic 페이지에서는 nfStop이 실행되고 진입한 키를 반납하여 진입 완료처리가 됩니다.
      <br />
      이제 아래 버튼을 눌러 대기실을 노출시키고, 진입 허용 수를 늘려 return 페이지로 넘어가 봅시다.
      <br />
      <button className={styles.blue} onClick={handleClickBasic}>
        [Basic]
      </button>
    </div>
  );
}
