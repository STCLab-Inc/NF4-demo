"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../../../../styles/page.module.css";

export default function StaticSection() {
  const router = useRouter();

  const handleClickSection = () => {
    window.nfStartSection({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {
      switch (res.status) {
        case "Success":
          router.push("section/target");
      }
    });
  };

  return (
    <div className={styles.common}>
      <p className={styles.sub_title}>구간 제어</p>
      구간 제어는 시작 페이지와 종료 페이지가 있습니다.
      <br />
      시작 페이지의 진입 지점에서 <span className={styles.yellow}>nfStartSection</span>을 실행하여 대기를 시작합니다.
      <br />
      시작 페이지에 진입한 이후부터 진입 완료 처리를 하기 전까지 구간에 진입해 있음을 서버에 알리며(<span className={styles.yellow}>Alive Notice</span>), 대기자 수는 줄어들지 않습니다.
      <br />
      종료 페이지에서 <span className={styles.yellow}>nfStopSection</span>을 실행하여 진입 완료 처리를 합니다.
      <br />
      <br />
      <b>1. 세그먼트 설정</b>
      <br />
      1-1. 구간 제어 세그먼트 생성 페이지로 진입합니다.
      <Image alt="console_section_create" src="/images/console_section_create.png" width={800} height={420} />
      <br />
      1-2. ① 기본 설정에서 세그먼트 이름과 세그먼트 키를 입력하고 생성 버튼을 누르세요.
      <br />
      <Image alt="console_section_create_1" src="/images/console_section_create_1.png" width={800} height={380} />
      <br />
      1-3. 세그먼트 목록 페이지로 가주세요. 아래 그림의 1번이 <span className={styles.yellow}>프로젝트 키</span>고, 2번이 <span className={styles.yellow}>세그먼트 키</span>에 해당합니다.
      <br />
      <Image alt="console_segment_list" src="/images/console_segment_list.png" width={1000} height={320} />
      1-4. <span className={styles.green}>/src/app/segment/static/section/page.tsx</span> 파일을 열어주세요. 아래 그림의 1번에 프로젝트 키를, 2번에 세그먼트 키를 넣어주세요.
      <Image alt="app_static_section" src="/images/app_static_section.png" width={800} height={240} />
      <br />
      1-5. handleClickSection 함수가 실행되면, 대기자가 있을 경우 대기실이 노출됩니다.
      <br />
      ㅤㅤ(handleClickSection 함수는 아래 2. 대기실 테스트 단계의 버튼에서 호출합니다.)
      <br />
      <br />
      2. 대기실 테스트
      <br />
      테스트 단계는 다음과 같습니다.
      <br />
      2-1. 아래 [타겟 페이지 진입 ⇲] 버튼을 클릭하여 대기실을 노출한다.
      <br />
      2-2. 세그먼트 수정에서 진입 허용 수를 1 이상으로 변경하여 저장한다. (아래 그림의 1번 부분)
      <Image alt="console_section_setting" src="/images/console_section_setting.png" width={800} height={560} />
      <br />
      2-3. 대기가 완료되어 타겟 페이지로 넘어간다.
      <br />
      2-4. 타겟 페이지에서 <span className={styles.yellow}>nfStopSection</span>을 설정하여 진입 완료 처리한다.
      <br />
      <br />
      <b>이제 위 테스트 순서대로 진행해주세요.</b>
      <br />
      <button className={styles.blue} onClick={handleClickSection}>
        타겟 페이지 진입 ⇲
      </button>
    </div>
  );
}
