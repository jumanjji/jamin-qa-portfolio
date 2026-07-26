import type { Metadata } from "next";
import AmplitudeAnalytics from "./AmplitudeAnalytics";
import "./globals.css";

const assetBasePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://jamin.qa"),
  title: "Jamin — Quality Engineering Analyst",
  description:
    "Quality engineering portfolio featuring mobile, web, API, Appium, and Playwright experience.",
  icons: {
    icon: `${assetBasePath}/favicon.svg`,
    shortcut: `${assetBasePath}/favicon.svg`,
  },
  openGraph: {
    type: "website",
    url: "https://jamin.qa",
    title: "Jamin — Quality Engineering Analyst",
    description:
      "I find the gaps between expected and actual, helping teams ship with confidence.",
    siteName: "Jamin Chaput",
    images: [
      {
        url: "https://jamin.qa/og.png",
        width: 1200,
        height: 630,
        alt: "Jamin Chaput — Quality Engineering Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamin — Quality Engineering Analyst",
    description:
      "I find the gaps between expected and actual, helping teams ship with confidence.",
    images: ["https://jamin.qa/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AmplitudeAnalytics />
        {children}
      </body>
    </html>
  );
}
