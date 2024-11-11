import type { Metadata } from "next";
import "./globals.css";
import InitializeNFScript from "./InitializeNFScript";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "NetFUNNEL Demo",
  description: "넷퍼넬 에이전트 설치를 돕기 위한 데모앱입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <InitializeNFScript />
        <main>
          <div className={styles.gnb}>NetFUNNEL Javascript agent guide for Next.js (app router)</div>
          {children}
        </main>
      </body>
    </html>
  );
}
