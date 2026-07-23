import type { Metadata } from "next";
import "./globals.css";

const assetBasePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Jamin — Quality Engineering Analyst",
  description:
    "Quality engineering portfolio featuring mobile, web, API, Appium, and Playwright experience.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${assetBasePath}/favicon.svg`,
    shortcut: `${assetBasePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
