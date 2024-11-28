"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/page.module.css";

export default function Dynamic() {
  return (
    <div className={styles.common}>
      <b className={styles.title}>동적 적용</b>
      <br />
      동적 적용은 <span className={styles.yellow}>트리거 규칙</span>에 따라 진입을 제어할 페이지가 정해지며, <span className={styles.yellow}>기본 제어</span>만 사용할 수 있습니다.
      <br />
      URL이 변경될 때마다 URL을 감지하여 트리거 규칙과 매칭되는지 확인합니다.
      <br />
      트리거 규칙과 매칭되고 대기가 필요할 경우 별도의 대기실 페이지로 이동합니다.
      <br />
      대기가 완료되면 원래 페이지로 진입합니다.
      <br />
      <br />
      이 페이지에서는 URL에 dynamic/target 가 포함될 경우 진입을 제어하도록 테스트를 진행하겠습니다.
      <br />
      <br />
      <b>1. 세그먼트 설정</b>
      <br />
      1-1. 넷퍼넬 콘솔에서 세그먼트 페이지에 진입합니다.
      <br />
      <Image alt="console_segment_navi" src="/images/console_segment_navi.png" width={400} height={400} />
      <br />
      1-2. 기본 제어 세그먼트 생성 페이지로 진입합니다.
      <Image alt="console_basic_create" src="/images/console_basic_create.png" width={800} height={400} />
      <br />
      1-3. ① 기본 설정에서 세그먼트 이름과 세그먼트 키를 입력하고 ② 트리거 규칙 설정으로 넘어가주세요.
      <br />
      <Image alt="console_basic_create_2" src="/images/console_basic_create_2.png" width={800} height={360} />
      <br />
      1-4. 아래 그림과 같이 트리거 규칙을 설정하고 세그먼트를 생성해주세요.
      <br />
      ㅤㅤURL에 dynamic/target이 포함되면 트리거 규칙이 매칭되어 대기가 걸립니다.
      <br />
      <Image alt="console_basic_create_3" src="/images/console_basic_create_3.png" width={800} height={480} />
      <br />
      <br />
      <b>2. 대기실 테스트</b>
      <br />
      테스트 단계는 다음과 같습니다.
      <br />
      2-1. 아래 [타겟 페이지 진입 ⇲] 버튼을 클릭하여 대기실을 노출한다.
      <br />
      2-2. 세그먼트 수정에서 진입 허용 수를 1 이상으로 변경하여 저장한다. (아래 그림의 1번 부분)
      <Image alt="console_dynamic_setting" src="/images/console_dynamic_setting.png" width={800} height={560} />
      <br />
      2-3. 대기가 완료되어 타겟 페이지로 넘어간다.
      <br />
      <br />
      <b>이제 위 테스트 순서대로 진행해주세요.</b>
      <br />
      <Link href="dynamic/target" className={styles.blue}>
        타겟 페이지 진입 ⇲
      </Link>
    </div>
  );
}
