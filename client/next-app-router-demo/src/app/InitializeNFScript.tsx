"use client";

import Script from "next/script";

export default function InitializeNFScript() {
  return (
    <>
      TODO{" "}
      <Script
        src="NF_AGENT_JS"
        data-nf-server-url="NF_SERVER_URL"
        data-nf-setting-url="SETTING_URL"
        data-nf-vwr-page-url="VWR_PAGE_URL"
        data-nf-retry-count="1"
        data-nf-network-timeout="3000"
        data-nf-print-log="false"
        data-nf-use-credential="false"
        data-nf-error-bypass="false"
      ></Script>
      <Script
        src="EUM_BROWSER_JS"
        strategy="beforeInteractive"
        onLoad={() => {
          if (window.STC_EUM) {
            window.STC_EUM.initialize({
              serverURL: "EUM_SERVER_URL",
              settingURL: "SETTING_URL",
              clientId: "1",
              trackResource: true,
              printLog: false,
            });
          }
        }}
      />
    </>
  );
}
