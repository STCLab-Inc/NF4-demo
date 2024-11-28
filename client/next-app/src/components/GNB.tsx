import Link from "next/link";
import styles from "../styles/page.module.css";

export default function GNB() {
  return (
    <div className={styles.gnb}>
      NetFUNNEL Javascript agent guide for Next.js (app router)
      <div className={styles.gnb_btns}>
        <Link href="/" className={styles.gnb_btn}>
          홈 ⇲
        </Link>
        <Link href="/install" className={styles.gnb_btn}>
          에이전트 설치 ⇲
        </Link>
        <Link href="/segment" className={styles.gnb_btn}>
          세그먼트 ⇲
        </Link>
        <Link href="/segment/static" className={styles.gnb_btn}>
          정적 적용 ⇲
        </Link>
        <Link href="/segment/dynamic" className={styles.gnb_btn}>
          동적 적용 ⇲
        </Link>
      </div>
    </div>
  );
}
