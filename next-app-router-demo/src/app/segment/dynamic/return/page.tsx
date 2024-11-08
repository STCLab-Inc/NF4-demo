import Link from "next/link";
import styles from "../../../page.module.css";

export default function DynamicReturn() {
  return (
    <div className={styles.common}>
      동적 적용의 경우, 대기를 마치고 페이지에 진입하면 자동으로 키 반납이 됩니다.
      <br />
      동적 적용에 대한 설명이 끝났습니다.
      <br />
      정적 적용에 대해 알아보고 싶으시다면 아래 버튼을 눌러주세요.
      <br />
      <Link className={styles.blue} href="/segment">
        [세그먼트]
      </Link>
    </div>
  );
}
