import type { Metadata } from "next";
import "../styles/globals.css";
import InitializeNFScript from "../components/InitializeNFScript";
import styles from "../styles/page.module.css";

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
        {/* 여기에 넷퍼넬 스니펫 삽입 */}
        <InitializeNFScript />
        <main>
          <div className={styles.gnb}>NetFUNNEL Javascript agent guide for Next.js (app router)</div>
          {children}
        </main>
      </body>
    </html>
  );
}
