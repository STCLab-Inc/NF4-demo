export {};

interface Options {
  projectKey: string;
  segmentKey: string;
}

declare global {
  interface Window {
    STC_EUM: {
      initialize: (config: { serverURL: string; settingURL: string; clientId: string; trackResource: boolean; printLog: boolean }) => Promise<void>;
    };
    nfStart: (config: Options, callback: (res: any) => void) => void;
    nfStop: (config: Options, callback: (res: any) => void) => void;
    nfStartSection: (config: Options, callback: (res: any) => void) => void;
    nfStopSection: (config: Options, callback: (res: any) => void) => void;
  }
}
