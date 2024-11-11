import Link from "next/link";
import styles from "../page.module.css";

export default function Segment() {
  return (
    <div className={styles.common}>
      넷퍼넬에서 진입 제어를 적용하는 방식에는 크게 두 가지가 있습니다.
      <br />
      <br />
      <b className={styles.title}>1. 정적 적용</b>
      <br />
      제어를 걸고 싶은 페이지로 이동하는 이벤트에 적용하는 방식으로, <span className={styles.goldenrod}>넷퍼넬 함수를 코드에 반영</span>해야 합니다.
      <br />
      예를 들어, /product 페이지에 대기를 걸고 싶다면, /product 로 넘어가는 button이나 a 태그의 click 이벤트에 넷퍼넬 함수를 적용합니다.
      <br />
      정적 적용에 대해 알고 싶다면 다음을 클릭하세요.
      <br />
      <Link href="segment/static/basic" className={styles.blue}>
        [정적 적용]
      </Link>
      <br />
      <br />
      <b className={styles.title}>2. 동적 적용</b>
      <br />
      코드 상의 수정 없이 넷퍼넬 콘솔에서 <span className={styles.goldenrod}>트리거 규칙</span>을 설정하여 적용합니다.
      <br />
      동적 적용에 대해 알고 싶다면 다음을 클릭하세요.
      <br />
      <Link href="segment/dynamic" className={styles.blue}>
        [동적 적용]
      </Link>
    </div>
  );
}
