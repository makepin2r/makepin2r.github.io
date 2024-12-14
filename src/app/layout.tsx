import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ColorThemeProvider from "./components/layout/theme/ColorThemeProvider";
import { blogTitle, blogDescription, baseDomain } from "@/config/const";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogTitle,
  description: blogDescription,
  icons: {
    icon: { url: "/favicon.ico}" },
  },
  openGraph: {
    title: blogTitle,
    description: blogDescription,
    siteName: blogTitle,
    images: [],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: blogDescription,
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.className}`}>
        <ColorThemeProvider>
          <Header />
          <main className="w-full max-w-[960px] mx-auto px-4 py-5 min-h-[calc(100vh-190px)]">
            {children}
          </main>
          <Footer />
        </ColorThemeProvider>
      </body>
    </html>
  );
}
