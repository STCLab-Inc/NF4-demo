import Link from "next/link";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.common}>
      <p className={styles.sub_title}>반갑습니다. 넷퍼넬 에이전트를 적용하기 위한 데모 앱입니다.</p>
      아래 단계로 가이드가 진행됩니다.
      <br />
      <br />
      1. 에이전트 설치
      <br />
      2. 세그먼트 적용 (정적 적용, 동적 적용)
      <br />
      3. 대기실 노출
      <br />
      4. 타겟 페이지 진입
      <br />
      <br />
      우선, 데모앱에 에이전트를 설치하겠습니다.{" "}
      <Link href="/install" className={styles.gnb_btn}>
        에이전트 설치 ⇲
      </Link>{" "}
      를 클릭해주세요.
      <br />
      (그 전에, <span className={styles.yellow}>TypeScript</span>를 사용 중이시라면 global.d.ts 파일을 참고하여 넷퍼넬 함수의 type을 설정해주세요.)
    </div>
  );
}
