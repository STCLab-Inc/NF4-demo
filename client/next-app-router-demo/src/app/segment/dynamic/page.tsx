"use client";

import Link from "next/link";
import styles from "../../page.module.css";

export default function Dynamic() {
  return (
    <div className={styles.common}>
      동적 적용에 대해 알아봅시다.
      <br />
      <br />
      ● 세그먼트 설정
      <br />
      동적 적용은 기본 제어 세그먼트에서만 설정할 수 있습니다. 다음 내용을 참고하면서 세그먼트를 생성해주세요.
      <br />
      동적 적용은 <span className={styles.goldenrod}>트리거 규칙</span>에 따라 진입을 제어할 페이지를 정하게 됩니다.
      <br />
      /dynamic/return 페이지에 대기를 걸기 위해 다음과 같이 트리거 규칙을 설정해주세요.
      <span className={styles.goldenrod}>
        <br />
        - Validator: URL
        <br />
        - Component: URL
        <br />
        - Negate: Does
        <br />
        - Match: Contains
        <br />- Value: /dynamic/return
      </span>
      <br />
      트리거 규칙 설정 후, 진입 허용 수를 0으로 설정하여 기본 제어 세그먼트를 생성해주세요.
      <br />
      이제 아래 버튼을 클릭하면 대기실 페이지로 이동니다. 진입 허용 수를 늘리면 대기가 종료되어 /dynamic/return 페이지로 진입합니다.
      <br />
      <Link href="dynamic/return" className={styles.blue}>
        [Dynamic]
      </Link>
    </div>
  );
}
