import type { Metadata } from "next";
import "./globals.css";
import GNB from "@/components/GNB";
import InitializeNFScript from "./InitializeNFScript";

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
      <head>
        <InitializeNFScript />
      </head>
      <body>
        <main>
          <GNB />
          {children}
        </main>
      </body>
    </html>
  );
}
