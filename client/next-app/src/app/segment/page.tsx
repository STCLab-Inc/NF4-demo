import Link from "next/link";
import styles from "../../styles/page.module.css";

export default function Segment() {
  return (
    <div className={styles.common}>
      <p className={styles.title}>세그먼트</p>
      세그먼트 설정을 통해 제어하고자 하는 페이지에 대기실을 적용합니다.
      <br />
      세그먼트를 적용하는 방식은 <span className={styles.yellow}>정적 적용</span>과 <span className={styles.yellow}>동적 적용</span> 두 가지가 있습니다.
      <br />
      <br />
      <p className={styles.sub_title}>정적 적용</p>
      제어하고 싶은 페이지로 진입하는 경로에 세그먼트를 적용하는 방식으로, <span className={styles.yellow}>넷퍼넬 함수를 코드에 반영</span>해야 합니다.
      <br />
      예를 들어, http://localhost:3000/segment/target 페이지에 대기를 걸고 싶다면, /target 로 넘어가는 button이나 a 태그의 click 이벤트에 넷퍼넬 함수를 적용합니다.
      <br />
      정적 적용을 체험하고 싶으시다면 아래 버튼을 클릭하세요.
      <br />
      <Link href="segment/static/basic" className={styles.gnb_btn}>
        정적 적용 ⇲
      </Link>
      <br />
      <br />
      <p className={styles.sub_title}>동적 적용</p>
      넷퍼넬 콘솔의 세그먼트 설정에서 <span className={styles.yellow}>트리거 규칙</span>을 통해 적용합니다.
      <br />
      트리거 규칙과 매칭되는 페이지에 세그먼트가 적용되는 방식입니다.
      <br />
      동적 적용을 체험하고 싶으시다면 아래 버튼을 클릭하세요.
      <br />
      <Link href="segment/dynamic" className={styles.gnb_btn}>
        동적 적용 ⇲
      </Link>
    </div>
  );
}
