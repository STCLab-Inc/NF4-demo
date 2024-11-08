"use client";

import Script from "next/script";

export default function InitializeNFScript() {
  return (
    <>
      {/* TODO <Script
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
      /> */}
      <Script
        src="https://agent-lib.staging.stclab.com/agents/client/javascript/netfunnel-javascript-agent.js"
        data-nf-server-url="https://totoro-4808.netfunnel.staging.stclab.com"
        data-nf-setting-url="https://nf-setting-bucket.staging.stclab.com/totoro-4808.netfunnel/nf-setting.json"
        data-nf-vwr-page-url="https://agent-lib.staging.stclab.com/vwr-page/totoro-4808.netfunnel/index.html"
        data-nf-retry-count="1"
        data-nf-network-timeout="1000"
        data-nf-print-log="false"
        data-nf-use-credential="false"
        data-nf-error-bypass="false"
      ></Script>
      <Script
        src="https://agent-lib.staging.stclab.com/agents/eum/browser/eum-browser.js"
        strategy="beforeInteractive"
        onLoad={() => {
          if (window.STC_EUM) {
            window.STC_EUM.initialize({
              serverURL: "https://eum-receiver-v3.staging.stclab.com/eum_data",
              settingURL: "https://nf-setting-bucket.staging.stclab.com/totoro-4808.netfunnel/nf-setting.json",
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
