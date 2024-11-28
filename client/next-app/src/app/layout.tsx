import GNB from "../components/GNB";
import type { Metadata } from "next";
import InitializeNFScript from "../components/InitializeNFScript";
import "../styles/globals.css";

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
          <GNB />
          {children}
        </main>
      </body>
    </html>
  );
}
