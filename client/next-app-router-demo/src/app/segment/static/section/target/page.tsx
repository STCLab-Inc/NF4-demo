"use client";

import Link from "next/link";
import styles from "../../../../../styles/page.module.css";

export default function SectionReturn() {
  const handleClickStopSection = () => {
    window.nfStopSection({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {
      if (res.status === "Complete") alert("NetFUNNEL key is successfully returned.");
    });
  };

  return (
    <div className={styles.common}>
      구간 제어는 진입 후 nfStopSection 함수를 호출하여 키를 반납하기 전까지 주기적으로 Alive Notice를 호출합니다.
      <br />
      Alive Notice에 대한 설정은 넷퍼넬 콘솔의 세그먼트 설정 - 고급 설정에서 할 수 있습니다.
      <br />
      nfStopSection 함수를 실행하면, 키를 반납하고 Alive Notice가 종료됩니다.
      <br />
      구간이 종료되는 페이지나 이벤트에 nfStopSection 함수를 실행하기 위해 아래의 버튼에 nfStopSection을 설정해봅시다.
      <br />
      handleClickStopSection의 <span className={styles.yellow}>PROJECT_KEY</span>와 <span className={styles.yellow}>SEGMENT_KEY</span>에 이전 페이지에서 입력했던 프로젝트 키와 세그먼트 키를 넣고
      저장하세요.
      <br />
      이제 아래 버튼을 클릭하면 nfStopSection 함수가 호출되고, 이전에 받았던 넷퍼넬 키를 반납하여 진입 완료 처리를 하게 됩니다.
      <br />
      <button className={styles.blue} onClick={handleClickStopSection}>
        [Stop Section]
      </button>
      <br />
      <br />
      구간 제어 설정이 완료되었습니다.
      <br />
      정적 적용을 처음부터 다시 해보고 싶으시거나, 동적 적용에 대해 알아보고 싶으시다면 아래 버튼을 눌러주세요.
      <br />
      <Link className={styles.blue} href="/segment">
        [2. 세그먼트 설정]
      </Link>
    </div>
  );
}
