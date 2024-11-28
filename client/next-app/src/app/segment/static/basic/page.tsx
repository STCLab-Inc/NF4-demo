"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../../../../styles/page.module.css";

export default function StaticBasic() {
  const router = useRouter();

  const handleClickBasic = () => {
    window.nfStart({ projectKey: "PROJECT_KEY", segmentKey: "SEGMENT_KEY" }, function (res) {
      switch (res.status) {
        case "Success":
          router.push("basic/target?setting=false");
      }
    });
  };

  return (
    <div className={styles.common}>
      <b className={styles.title}>정적 적용</b>
      <br />
      정적 적용 방식은 nfStart, nfStartSection과 같은 <span className={styles.yellow}>넷퍼넬 함수</span>를 통해 진입을 제어합니다.
      <br />
      /segment/static/basic/target 페이지로 진입하기 전 페이지인 현재 페이지에서 nfStart를 실행시키면 대기실이 노출되고, 대기가 끝나면 target 페이지로 넘어갑니다.
      <br />
      정적 적용 방식으로는 <span className={styles.yellow}>기본 제어</span>와 <span className={styles.yellow}>구간 제어</span>를 사용할 수 있습니다.
      <br />
      <br />
      이 페이지에서는 기본 제어를 적용하는 방법을 알아보겠습니다.
      <br />
      바로 구간 제어에 대해 알아보고 싶으시다면, 오른쪽 버튼을 누르새요.{" "}
      <Link href="/segment/static/section" className={styles.gnb_btn}>
        구간 제어 ⇲{" "}
      </Link>
      <br />
      <br />
      <p className={styles.sub_title}>기본 제어</p>
      <b>1. 세그먼트 설정</b>
      <br />
      1-1. 넷퍼넬 콘솔에서 세그먼트 페이지에 진입합니다.
      <br />
      <Image alt="console_segment_navi" src="/images/console_segment_navi.png" width={400} height={400} />
      <br />
      1-2. 기본 제어 세그먼트 생성 페이지로 진입합니다.
      <Image alt="console_basic_create" src="/images/console_basic_create.png" width={800} height={400} />
      <br />
      1-3. ① 기본 설정에서 세그먼트 이름과 세그먼트 키를 입력하고 생성 버튼을 누르세요.
      <br />
      <Image alt="console_basic_create_1" src="/images/console_basic_create_1.png" width={800} height={360} />
      <br />
      1-4. 세그먼트 목록 페이지로 가주세요. 아래 그림의 1번이 <span className={styles.yellow}>프로젝트 키</span>고, 2번이 <span className={styles.yellow}>세그먼트 키</span>에 해당합니다.
      <br />
      <Image alt="console_segment_list" src="/images/console_segment_list.png" width={1000} height={320} />
      1-5. <span className={styles.green}>/src/app/segment/static/basic/page.tsx</span> 파일을 열어주세요. 아래 그림의 1번에 프로젝트 키를, 2번에 세그먼트 키를 넣어주세요.
      <br />
      <Image alt="app_static_basic" src="/images/app_static_basic.png" width={800} height={240} />
      <br />
      1-6. handleClickBasic 함수가 실행되면, 대기자가 있을 경우 대기실이 노출됩니다.
      <br />
      ㅤㅤ(handleClickBasic 함수는 아래 2. 대기실 테스트 단계의 버튼에서 호출합니다.)
      <br />
      1-7. 이제 타겟 페이지에 진입 후 <span className={styles.yellow}>nfStop</span>가 실행되어 진입 완료 처리를 하도록 해야 합니다. 아래 버튼을 눌러 타겟 페이지를 설정합시다.
      <br />
      <Link href="basic/target?setting=true" className={styles.blue}>
        타겟 페이지 설정 ⇲
      </Link>
      <br />
      <br />
      <b>2. 대기실 테스트</b>
      <br />
      테스트 단계는 다음과 같습니다.
      <br />
      2-1. 아래 [타겟 페이지 진입 ⇲] 버튼을 클릭하여 대기실을 노출한다.
      <br />
      2-2. 세그먼트 수정에서 진입 허용 수를 1 이상으로 변경하여 저장한다. (아래 그림의 1번 부분)
      <Image alt="console_basic_setting" src="/images/console_basic_setting.png" width={800} height={560} />
      <br />
      2-3. 대기가 완료되어 타겟 페이지로 넘어간다.
      <br />
      <br />
      <b>이제 위 테스트 순서대로 진행해주세요.</b>
      <br />
      <button className={styles.blue} onClick={handleClickBasic}>
        타겟 페이지 진입 ⇲
      </button>
    </div>
  );
}
