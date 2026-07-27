import type { Metadata } from "next";
import AmplitudeAnalytics from "./AmplitudeAnalytics";
import "./globals.css";
import { siteUrl, socialProfiles } from "./site";

const assetBasePath = process.env.PAGES_BASE_PATH ?? "";
const title = "Jamin | Mobile QA & Quality Engineer in Toronto";
const description =
  "Toronto-based quality engineer specializing in iOS, Android, web and API testing, with Appium, Playwright, exploratory testing and release automation experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Jamin",
  creator: "Jamin Chaput",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: `${assetBasePath}/favicon.svg`,
    shortcut: `${assetBasePath}/favicon.svg`,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title,
    description,
    siteName: "Jamin Chaput",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Jamin — Mobile QA and Quality Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og.png`,
        alt: "Jamin — Mobile QA and Quality Engineering",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Jamin",
      alternateName: "Jamin QA",
      inLanguage: "en-CA",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: `${siteUrl}/`,
      name: title,
      description,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-CA",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Jamin",
      alternateName: ["Jamin Chaput", "jumanjji"],
      url: `${siteUrl}/`,
      image: `${siteUrl}/jamin-portrait.webp`,
      jobTitle: "Quality Engineering Analyst",
      homeLocation: {
        "@type": "Place",
        name: "Toronto, Ontario, Canada",
      },
      knowsAbout: [
        "Mobile quality assurance",
        "iOS testing",
        "Android testing",
        "Exploratory testing",
        "Appium",
        "Playwright",
        "API testing",
        "GraphQL testing",
        "Release validation",
      ],
      sameAs: socialProfiles,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <AmplitudeAnalytics />
        {children}
      </body>
    </html>
  );
}
