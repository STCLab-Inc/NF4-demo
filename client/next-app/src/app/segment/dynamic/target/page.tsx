import styles from "../../../../styles/page.module.css";

export default function DynamicReturn() {
  return (
    <div className={styles.common}>
      동적 적용의 경우, 대기를 마치고 target 페이지에 진입하면 자동으로 진입 완료 처리가 됩니다.
      <br />
      동적 적용 테스트가 끝났습니다.
    </div>
  );
}
